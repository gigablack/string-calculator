const dashToDashOne = (operationArray) => {
    /**
     * receives an array mixed with string and numbers and returns a new array
        * changing the dashes by -1 and "*"
     * @param {array}
     * @return {array}  
     */

    let newArray = [...operationArray]
    if(newArray.indexOf('-') !== -1){
        // do things
        //["-",1,"-",1]
        let index = newArray.indexOf('-')
        newArray.splice(index,1,-1,'*')
        return dashToDashOne(newArray)
    } else {
        // do things
        return newArray
    }
}

module.exports = dashToDashOne