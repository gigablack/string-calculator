const multiDiv = (operationArrayParsed) => {
    /**
     * receives an array with mixed operators string and numbers and returns
        * a new array without "*" and "/" simbols and replacing the adyacent numbers
        * by the result of that operation.
     * @param {array}
     * @return {array}  
     */

    let newArray = [...operationArrayParsed]
    let indexMul = newArray.indexOf('*')
    let indexDiv = newArray.indexOf('/')

    if(indexMul !== -1 && indexMul > indexDiv){
        // multiply
        let currentOp = newArray[indexMul-1] * newArray[indexMul+1]
        newArray.splice(indexMul-1,3,currentOp)
        return multiDiv(newArray)
    } else if(indexDiv !== -1 && indexDiv > indexMul){
        // divide
        let currentOp = newArray[indexDiv-1] / newArray[indexDiv+1]
        newArray.splice(indexDiv-1,3,currentOp)
        return multiDiv(newArray)
    } else {
        return newArray
    }
}

module.exports = multiDiv