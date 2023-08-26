#!/bin/bash

# Set the source directories
generated_tests_dir="../TestsForRepair"
manual_tests_dir="../buggy-programs"
buggy_programs_dir="../buggy-programs"

# Create a new directory to store the generated folders
output_dir="testFolders"
mkdir -p "$output_dir"

# Process generated tests
for test_folder in "$generated_tests_dir"/*; do
    test_name=$(basename "$test_folder")

    # Create a new folder for each test
    new_folder="$output_dir/$test_name"
    mkdir -p "$new_folder"

    # Copy the test file
    cp "$test_folder/tests.js" "$new_folder"

    # Find the matching buggy program
    #buggy_program=$(find "$buggy_programs_dir" -name "*$test_name*")

    buggy_program=""

    for dir in "$buggy_programs_dir"/*; do
    
    buggy_program_name=$(basename "$dir")

    echo "The buggy_program_name = $buggy_program_name"
    echo "The buggy_program_name = $buggy_program_name with testname: $test_name and the dir: $dir"

    # Check if the directory name contains the test_name
    if [[ "$test_name" == "$buggy_program_name"* ]]; then

    buggy_program="$dir"
    echo "MATCH: $test_name"

    fi

    done

    echo "THIS IS DIR: $buggy_program"

    cp "$buggy_program/repair-subjects"/*.sb3 "$new_folder"
done

echo "NOW START THE MANUEL"

# Process manual tests
for test_file in "$manual_tests_dir"/*; do
    test_name=$(basename "$test_file" .js)

    # Create a new folder for each test
    new_folder="$output_dir/$test_name"
    mkdir -p "$new_folder"

    # Copy the test file
    cp "$test_file/tests-manual.js" "$new_folder"

    buggy_program=""

    for dir in "$buggy_programs_dir"/*; do
    # Check if the directory name contains the test_name

    buggy_program_name=$(basename "$dir")
    echo "The buggy_program_name = $buggy_program_name with testname: $test_name and the dir: $dir"

    if [[ "$buggy_program_name" == *"$test_name"* ]]; then

    echo "MATCH: $test_name"

    buggy_program="$dir"

    fi

    done

    echo "THIS IS DIR MANUAL: $buggy_program"

    # Copy the matching buggy program
    cp "$buggy_program/repair-subjects"/*.sb3 "$new_folder"
done