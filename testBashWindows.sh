
SERVANT_DIR="..\whisker-main\servant"


if [ -z "${SERVANT_DIR}" ]; then
    echo "Error: you must set SERVANT_DIR to the servant directory"
    exit 1
fi



servant() {
    node "${SERVANT_DIR}" "$@" -a 10 -d -l -k
}

mkdir -p raw

for b in {1}; do 


names1=(
"4-Fangen-mio-minimizie-false.json-repetition-${b}"
"4-Fangen-mio-no-assertion.json-repetition-${b}"
"4-Fangen-mio-no-test.json-repetition-${b}"
"5-Labyrinth-mio.json-repetition-${b}"
"5-Labyrinth-mio-minimizie-false.json-repetition-${b}"
"5-Labyrinth-mio-no-assertion.json-repetition-${b}"
"5-Labyrinth-mio-no-test.json-repetition-${b}"
"6-Papagei-mio.json-repetition-${b}"
"6-Papagei-mio-minimizie-false.json-repetition-${b}"
"6-Papagei-mio-no-assertion.json-repetition-${b}"
"6-Papagei-mio-no-test.json-repetition-${b}"
"7-Raumschiff-mio.json-repetition-${b}"
"7-Raumschiff-mio-minimizie-false.json-repetition-${b}"
"7-Raumschiff-mio-no-assertion.json-repetition-${b}"
"7-Raumschiff-mio-no-test.json-repetition-${b}"
"8-Schatzinsel-mio.json-repetition-${b}"
"8-Schatzinsel-mio-minimizie-false.json-repetition-${b}"
"8-Schatzinsel-mio-no-assertion.json-repetition-${b}"
"8-Schatzinsel-mio-no-test.json-repetition-${b}"
"9-Sternenjagd-mio.json-repetition-${b}"
"9-Sternenjagd-mio-minimizie-false.json-repetition-${b}"
"9-Sternenjagd-mio-no-assertion.json-repetition-${b}"
"9-Sternenjagd-mio-no-test.json-repetition-${b}"
"10-Pong-mio.json-repetition-${b}"
"10-Pong-mio-minimizie-false.json-repetition-${b}"
"10-Pong-mio-no-assertion.json-repetition-${b}"
"10-Pong-mio-no-test.json-repetition-${b}"
"11-Snake-mio.json-repetition-1${b}"
"11-Snake-mio-minimizie-false.json-repetition-${b}"
"11-Snake-mio-no-assertion.json-repetition-${b}"
"11-Snake-mio-no-test.json-repetition-${b}"
"12-TicTacToe-mio.json-repetition-${b}"
"12-TicTacToe-mio-minimizie-false.json-repetition-${b}1"
"12-TicTacToe-mio-no-assertion.json-repetition-${b}"
"12-TicTacToe-mio-no-test.json-repetition-${b}"
"13-Winter-mio.json-repetition-${b}"
"13-Winter-mio-minimizie-false.json-repetition-${b}"
"13-Winter-mio-no-assertion.json-repetition-${b}"
"13-Winter-mio-no-test.json-repetition-${b}"
"14-Skipiste-mio.json-repetition-${b}"
"14-Skipiste-mio-minimizie-false.json-repetition-${b}1"
"14-Skipiste-mio-no-assertion.json-repetition-${b}"
"14-Skipiste-mio-no-test.json-repetition-${b}"
"1-Garten-mio.json-repetition-${b}"
"1-Garten-mio-minimizie-false.json-repetition-${b}"
"1-Garten-mio-no-assertion.json-repetition-${b}"
"1-Garten-mio-no-test.json-repetition-${b}"
"2-Geisterwald-mio.json-repetition-${b}"
"2-Geisterwald-mio-minimizie-false.json-repetition-${b}"
"2-Geisterwald-mio-no-assertion.json-repetition-${b}"
"2-Geisterwald-mio-no-test.json-repetition-${b}"
"3-HappyNewYear-mio.json-repetition-${b}"
"3-HappyNewYear-mio-minimizie-false.json-repetition-${b}"
"3-HappyNewYear-mio-no-assertion.json-repetition-${b}"
"3-HappyNewYear-mio-no-test.json-repetition-${b}"
"4-Fangen-mio.json-repetition-${b}"
)



names2=(
"max-mio.json-repetition-${b}"
"max-mio-minimizie-false.json-repetition-${b}"
"max-mio-no-assertion.json-repetition-${b}"
"max-mio-no-test.json-repetition-${b}"
"mid-mio.json-repetition-${b}"
"mid-mio-minimizie-false.json-repetition-${b}"
"mid-mio-no-assertion.json-repetition-${b}"
"mid-mio-no-test.json-repetition-${b}"
"prime-mio.json-repetition-${b}"
"prime-mio-minimizie-false.json-repetition-${b}"
"prime-mio-no-assertion.json-repetition-${b}"
"prime-mio-no-test.json-repetition-${b}"
"quad-mio.json-repetition-${b}"
"quad-mio-minimizie-false.json-repetition-${b}"
"quad-mio-no-assertion.json-repetition-${b}"
"quad-mio-no-test.json-repetition-${b}"
"solution-mio-minimizie-false.json-repetition-${b}"
"solution-mio-no-assertion.json-repetition-${b}"
"solution-mio-no-test.json-repetition-${b}"
"tri-mio.json-repetition-${b}"
"tri-mio-minimizie-false.json-repetition-${b}"
"tri-mio-no-assertion.json-repetition-${b}"
"tri-mio-no-test.json-repetition-${b}"
)


names3=(
"boat-race-mio.json-repetition-${b}"
"boat-race-mio-minimizie-false.json-repetition-${b}"
"boat-race-mio-no-assertion.json-repetition-${b}"
"boat-race-mio-no-test.json-repetition-${b}"
"fruit-catching-mio.json-repetition-${b}"
"fruit-catching-mio-minimizie-false.json-repetition-${b}"
"fruit-catching-mio-no-assertion.json-repetition-${b}"
"fruit-catching-mio-no-test.json-repetition-${b}"
)

names4=(

"raumschiff-mio.json-repetition-${b}"
"raumschiff-mio-minimizie-false.json-repetition-${b}"
"raumschiff-mio-no-assertion.json-repetition-${b}"
"raumschiff-mio-no-test.json-repetition-${b}"
)

names5=(
"2-Geisterwald-mio.json-repetition-5"
"2-Geisterwald-mio-minimizie-false.json-repetition-3"
"2-Geisterwald-mio-no-assertion.json-repetition-3"
"2-Geisterwald-mio-no-test.json-repetition-2"
"3-HappyNewYear-mio.json-repetition-1"
"3-HappyNewYear-mio.json-repetition-5"
"3-HappyNewYear-mio-minimizie-false.json-repetition-1"
"3-HappyNewYear-mio-no-assertion.json-repetition-4"
"3-HappyNewYear-mio-no-test.json-repetition-4"
"4-Fangen-mio.json-repetition-4"
"4-Fangen-mio-minimizie-false.json-repetition-5"
"4-Fangen-mio-no-assertion.json-repetition-5"
"4-Fangen-mio-no-test.json-repetition-3"
"5-Labyrinth-mio.json-repetition-2"
"5-Labyrinth-mio-minimizie-false.json-repetition-3"
"5-Labyrinth-mio-no-assertion.json-repetition-3"
"5-Labyrinth-mio-no-test.json-repetition-3"
"6-Papagei-mio.json-repetition-2"
"6-Papagei-mio-minimizie-false.json-repetition-2"
"6-Papagei-mio-no-assertion.json-repetition-2"
"6-Papagei-mio-no-test.json-repetition-2"
"7-Raumschiff-mio.json-repetition-2"
"7-Raumschiff-mio-minimizie-false.json-repetition-5"
"7-Raumschiff-mio-no-assertion.json-repetition-3"
"7-Raumschiff-mio-no-test.json-repetition-1"
"8-Schatzinsel-mio.json-repetition-2"
"8-Schatzinsel-mio-minimizie-false.json-repetition-2"
"8-Schatzinsel-mio-no-assertion.json-repetition-2"
"8-Schatzinsel-mio-no-test.json-repetition-2"
"9-Sternenjagd-mio.json-repetition-1"
"9-Sternenjagd-mio-minimizie-false.json-repetition-5"
"9-Sternenjagd-mio-no-assertion.json-repetition-1"
"9-Sternenjagd-mio-no-test.json-repetition-1"
"13-Winter-mio.json-repetition-3"
"13-Winter-mio-minimizie-false.json-repetition-1"
"13-Winter-mio-no-assertion.json-repetition-5"
"13-Winter-mio-no-test.json-repetition-2"

)



#Tests for "TestForRepair" Objects
#for name in "${names5[@]}"; do
#    folder_name=""
#    test_program_folder=""
#
#    folder_name=$(echo "$name" | cut -d '-' -f1-2)
#    
#    test_program_folder="/$folder_name/repair-subjects/"
#    
#    echo"THIS IS THE FOLDER $folder_name"
#
#    servant run \
#        -s "../buggy-programs/$test_program_folder"\
#        -t "../TestsForRepair/$name/tests.js" \
#        -v "test_tests_for_repair/$name.csv"
#done




for name in "../repair-result"/*; do

    name_of_folder=$(basename "$name")
    test="123456"
    program="1234556"

    if [[ "$name" == *"manual"* ]]; then
       
        for file in "$name"/*.js; do
            echo "The file is: $file"
            test="$file"
            test=$(basename "$test")
            echo "The test is: $test"
        done

        for file in "$name"/*.sb3; do
            if [[ "$file" == *"repaired"* ]]; then 
                echo "The file is: $file"
                program="$file"
                program=$(basename "$program")
                echo "The program is $program"
            fi
        done

        servant run \
            -s "$name/$program" \
            -t "$name/$test" \
            -v "compairing-manual-mio/manual_manual_prog$name_of_folder.csv"



        for mio_program_folder in "../repair-result"/*; do
            if [[ "$mio_program_folder" == *"mio.json"* ]]; then
            
                for file in "$mio_program_folder"/*.sb3; do

                    if [[ "$file" == *"repaired"* ]]; then 

                        file_name=$(echo "$program" | cut -d '-' -f1-2)
    
                        if [[ "$file" == *"$file_name"* ]]; then
                            
                            echo "1 The name is: $name"
                            echo "1 The folder for the program is: $mio_program_folder"
                            echo "1 The test is: $test"
                            echo "1 The file is: $file"
                            echo "1 The program is: $program"
                            echo "1 THe file_name is: $file_name"
                            program="$file"
                            program=$(basename "$program")
    
                    
                            
    
                            servant run \
                                -s "$mio_program_folder/$program" \
                                -t "$name/$test" \
                                -v "compairing-manual-mio/manual_mio_prog$name_of_folder.csv"
    
                        fi

                    fi
                done

                
            fi
        done
    fi

    # MIO FOLDERS

    if [[ "$name" == *"mio.json"* ]]; then
        test="12345"
        program="12345"
        for file in "$name"/*.js; do
            echo "$file"
            test="$file"
            test=$(basename "$test")
        done

        for file in "$name"/*.sb3; do
            if [[ "$file" == *"repaired"* ]]; then 
                echo "The file is: $file"
                program="$file"
                program=$(basename "$program")
                echo "The program is $program"
            fi
        done

            echo "2 The name is: $name"
            echo "2 The program is: $program"
            echo "2 The test is: $test"

        servant run \
            -s "$name/$program" \
            -t "$name/$test" \
            -v "compairing-manual-mio/mio_mio_prog$name_of_folder.csv"

        for mio_program_folder in "../repair-result"/*; do
            
            if [[ "$mio_program_folder" == *"manual"* ]]; then
            

                for file in "$mio_program_folder"/*.sb3; do

                if [[ "$file" == *"repaired"* ]]; then 


                    file_name=$(echo "$program" | cut -d '-' -f1-2)
                    

                    if [[ "$file" == *"$file_name"* ]]; then
                        
                        program="$file"
                        program=$(basename "$program")
                   
                        echo "1 The name is: $name"
                        echo "1 The folder for the program is: $mio_program_folder"
                        echo "1 The program is: $program"
                        echo "1 The test is: $test"
                        echo "1 THe file_name is: $file_name"

                        
                        servant run \
                            -s "$mio_program_folder/$program" \
                            -t "$name/$test" \
                            -v "compairing-manual-mio/mio_manual_prog$name_of_folder.csv"

                    fi

                fi    
                done

                
            fi                




        done
    fi

done








#for name in "${names1[@]}"; do
#    folder_name=""
#    test_program_folder=""
#
#    folder_name=$(echo "$name" | cut -d '-' -f1-2)
#
#    test_program_folder="/$folder_name/repair-subjects/"
#    
#    echo"THIS IS THE FOLDER $folder_name"
#
#    servant run \
#        -s "../buggy-programs/$test_program_folder"\
#        -t "../results/${b}/$name/tests.js" \
#        -v "results$name.csv"
#done


#for name in "${names2[@]}"; do
#
#    folder_name=""
#    test_program_folder=""
#    folder_name=$(echo "$name" | cut -d "-" -f 1)
#    test_program_folder="/$folder_name/repair-subjects/"
#
#
#    servant run \
#        -s "../buggy-programs/$test_program_folder"\
#        -t "../results/${b}/$name/tests.js" \
#        -v "results$name.csv"
#done

#for name in "${names3[@]}"; do
#    folder_name=""
#    test_program_folder=""
#
#    folder_name=$(echo "$name" | cut -d '-' -f1-2)
#
#    test_program_folder="/$folder_name/repair-subjects/"
#    
#    echo"THIS IS THE FOLDER $folder_name"
#
#    servant run \
#        -s "../buggy-programs/$test_program_folder"\
#        -t "../results/${b}/$name/tests.js" \
#        -v "2er-projects-test-results/results$name.csv"
#done
#
#
#for name in "${names4[@]}"; do
#    folder_name=""
#    test_program_folder=""
#
#    folder_name=$(echo "$name" | cut -d "-" -f 1)
#
#    test_program_folder="/$folder_name/repair-subjects/"
#    
#    echo"THIS IS THE FOLDER $folder_name"
#
#    servant run \
#        -s "../buggy-programs/$test_program_folder"\
#        -t "../results/${b}/$name/tests.js" \
#        -v "2er-projects-test-results/results$name.csv"
#done


done


