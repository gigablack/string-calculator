const removePlus = require('./removePlus')

const sumArrayItems = (operationArrayMultiDiv) => {
    /**
     * receives an array and evaluate if the array length is greater than 1
        * if is true, evaluate if the array contains "+" if is true remove them.
            * if is false reduce the array.
        * if is false return the unique value of the array.  
     */

    let newArray = [...operationArrayMultiDiv]

    if(newArray.length > 1){
        // To do
        if(newArray.indexOf('+') !== -1){
            // To do
            newArray = removePlus(newArray)
            return newArray.reduce((prev,curr)=> prev + curr)
        } else {
            // To do
            return newArray.reduce((prev,curr)=> prev + curr)
        }
    } else {
        return newArray[0]
    }
}

module.exports = sumArrayItems