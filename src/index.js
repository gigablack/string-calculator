const generateOperatorsArray = require('./libs/generateOperatorsArray')
const generateNumbersArray = require('./libs/generateNumbersArray')
const generateOperationArray = require('./libs/generateOperationArray')
const dashToDashOne = require('./libs/dashToDashOne')
const multiDiv = require('./libs/multiDiv')
const sumArrayItems = require('./libs/sumArrayItems')

const stringCalculator = (inputString) => {
/**
 * receives a string with a mathematical operation and returns a number
 * @param {string}
 * @return {number}  
 */

 let opArray = generateOperatorsArray(inputString)

 let numArray = generateNumbersArray(inputString)

 let operationArray = generateOperationArray(opArray,numArray)

 let operationArrayParsed = dashToDashOne(operationArray)

 let operationArrayMultiDiv = multiDiv(operationArrayParsed)

 let result = sumArrayItems(operationArrayMultiDiv)

 return result
}

module.exports = stringCalculator