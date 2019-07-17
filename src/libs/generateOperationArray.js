const fillOperationArray = require('./fillOperationArray')

const generateOperationArray = (opArray,numArray) => {
    /**
     * receives string, an operators array and a numbers array and returns a mixed array.
     * @param {string}
     * @param {array}
     * @param {array}
     * @return {array}
     */

    if(opArray.length === 0) return numArray

    let operationArray = []

    if(numArray.length > opArray.length){
        // do things
        operationArray = fillOperationArray(numArray,opArray)
    } else {
        // do things
        operationArray = fillOperationArray(opArray,numArray)
    }
    
    return operationArray
}

module.exports = generateOperationArray