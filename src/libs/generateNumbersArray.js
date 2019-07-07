const generateStringNumArray = require('./generateStringNumArray')
const generateNumArray = require('./generateNumArray')

const generateNumbersArray = (inputString) => {
    /**
     * receives a string with a mathematical operation and returns an array of numbers
     * @param {string}
     * @return {array}
     */

    let stringNumArray = generateStringNumArray(inputString)

    let numArray = generateNumArray(stringNumArray)

    return [1,1,1]
}

module.exports = generateNumbersArray