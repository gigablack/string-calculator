const removePlus = (arrayWithPlus) => {
    /**
     * receives an array with plus operators (+) and returns a new array without plus.
     * @param {array}
     * @return {array}
     */
    let newArray = [...arrayWithPlus]
    while(newArray.indexOf('+') !== -1){
        let indexPlus = newArray.indexOf('+')
        newArray.splice(indexPlus,1)
    }
    
    return newArray
}

module.exports = removePlus