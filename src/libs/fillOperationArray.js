const fillOperationArray = (array1,array2) => {
    /**
     * receives two arrays and returns a new one filling element by element
         * starting for array1
     * @param {array}
     * @param {array}
     * @return {array} 
     */
    let firstArray = [...array1]
    let secondArray = [...array2]
    let resultArray = []

    while(firstArray.length > 0){
        resultArray.push(firstArray[0])
        firstArray.splice(0,1)
        if(secondArray.length > 0) {
            resultArray.push(secondArray[0])
            secondArray.splice(0,1)
        }
    }

    return resultArray
}

module.exports = fillOperationArray