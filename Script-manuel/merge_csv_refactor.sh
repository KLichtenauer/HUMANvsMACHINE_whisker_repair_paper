#!/bin/bash

output_file="merged_ref.csv"
header_written=false

echo "file_name,#tests" > "$output_file"


for file in results*.csv; do
    echo "$file"
    if [ "$file" != "$output_file" ]; then
        if [ "$header_written" = false ]; then
            # Copy the header from the first file and remove "Generated Test" column
            echo "file_name,#tests" > "$output_file"

            awk -F',' 'BEGIN {OFS=","} NR<2 {for(i=1;i<=NF;i++) {if($i!="Generated Test") {printf "%s%s", $i, (i==NF?ORS:OFS)}}}' "$file" > "$output_file"
            header_written=true
        fi

        # Count the number of "Generated Test" columns
        num_tests=$(awk -F',' 'NR=1 {for(i=1;i<=NF;i++) if($i=="Generated Test") count++} END{print count}' "$file")

        echo "the number of tests is: $num_tests"

        # Add file name, num_tests, num_passed, and num_failed columns to each line (excluding the header)
        awk -v file="$file" -v num_tests="$num_tests" 'BEGIN { FS=OFS="," } NR>1 { 
    printf "%s,%s", file, num_tests;
    for (i=1; i<=NF; i++) {
        if ($i != "pass") {
            printf "%s%s", OFS, $i;
        }
    }
    printf ORS;
}' "$file" >> "$output_file"
    fi
done

sed -i '1s/^/file_name,#tests,/' "$output_file"

echo "Merged CSV file created: $output_file"

