
DIR="../repair-result"

SERVANT_DIR="../whisker-main/servant"

echo "${DIR}"


if [ -z "${SERVANT_DIR}" ]; then
    echo "Error: you must set SERVANT_DIR to the servant directory"
    exit 1
fi

servant() {
    node "${SERVANT_DIR}" "$@" -a 10 -d -l -k
}


cd "${DIR}"


for ((number=1; number<=342; number++)); do
    folder="$number"

    test=""
    programToTest=""

    echo "Folder: ${folder}"

    test=""
    programToTest=""

    testfound=false
    subjectfound=false

    for file in "${folder}"/*; do

        file=$(basename "$file")
        echo "${file}"

        if [[ "$file" == *"test"* ]]; then
            test="$file"
            echo "Test got matched: ${test}"
            testfound=true
        fi

        if [[ "$file" == *"repair"* ]]; then
            programToTest="$file"
            subjectfound=true
            echo "Program got matched: ${programToTest}"
        fi
    done

    echo "Program to test: $programToTest"
    echo "test: $test"

    if $testfound && $subjectfound; then
    servant run \
        -s "../repair-result/$folder/$programToTest" \
        -t "../repair-result/$folder/$test" \
        -v "../Script/testRepairedProjectsResult/${number}-${programToTest}-${test}.csv"
    fi
done



