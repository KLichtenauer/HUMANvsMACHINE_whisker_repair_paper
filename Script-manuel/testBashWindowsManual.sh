
SERVANT_DIR="..\whisker-main\servant"


if [ -z "${SERVANT_DIR}" ]; then
    echo "Error: you must set SERVANT_DIR to the servant directory"
    exit 1
fi

names1=(1-Garten
2-Geisterwald
3-HappyNewYear
4-Fangen
5-Labyrinth
6-Papagei
7-Raumschiff
8-Schatzinsel
9-Sternenjagd
10-Pong
11-Snake
12-TicTacToe
13-Winter
14-Skipiste)



names2=(
"max"
"mid"
"prime"
"quad"
"tri"
)

names3=(
    "fruit-catching"
    "raumschiff" 
    "boat-race"
)

servant() {
    node "${SERVANT_DIR}" "$@" -a 10 -d -l -k
}


for name in "${names1[@]}"; do
    folder_name=""
    test_program_folder=""

    test_program_folder="/$name/repair-subjects/"
    
    echo"THIS IS THE FOLDER $folder_name"

    servant run \
        -s "../buggy-programs/$test_program_folder"\
        -t "../buggy-programs/$name/tests-manual.js" \
        -v "results$name.csv"
done


for name in "${names2[@]}"; do

    folder_name=""
    test_program_folder=""
    test_program_folder="/$name/repair-subjects/"


    servant run \
        -s "../buggy-programs/$test_program_folder"\
        -t "../buggy-programs/$name/tests-manual.js" \
        -v "results$name.csv"
done


for name in "${names3[@]}"; do
    folder_name=""
    test_program_folder=""

    test_program_folder="/$name/repair-subjects/"
    
    echo"THIS IS THE FOLDER $folder_name"

    servant run \
        -s "../buggy-programs/$test_program_folder"\
        -t "../buggy-programs/$name/tests-manual.js" \
        -v "results$name.csv"
done


done

