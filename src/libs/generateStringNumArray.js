const generateStringNumArray = (inputString) => {
    /**
     * receives a string with a mathematical operation and returns an array of string with individual numbers.
     * @param {string}
     * @return {array}
     */

    let stringNumbers = inputString.match(/\d[?\.|?\d]*/g)
    
    return stringNumbers
}

module.exports = generateStringNumArray