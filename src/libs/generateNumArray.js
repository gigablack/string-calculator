const generateNumArray = (stringNumArray) => {
    /**
     * receives an Array of string and returns an array of numbers
     * @param {array}
     * @return {array}
     */

    let numbersArray = stringNumArray.map(val => +val)
    
    return numbersArray
}

module.exports = generateNumArray