const generateOperatorsArray = (inputString) => {
    /**
     * recceives a string and return an array with the mathematical operators
     * @param {string}
     * @return {array}
     */

    let operators = inputString.match(/\D/g)

    if(operators){
        return operators
    } else {
        return []
    }
}

module.exports = generateOperatorsArray