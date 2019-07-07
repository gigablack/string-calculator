const generateOperatorsArray = require('../libs/generateOperatorsArray')

test('"3+5" debe ser igual a ["+"]',()=>{
    expect(generateOperatorsArray("3+5")).toEqual(["+"])
})

test('"-3+5" debe ser igual a ["-","+"]',()=>{
    expect(generateOperatorsArray("-3+5")).toEqual(["-","+"])
})

test('"3-5" debe ser igual a ["-"]',()=>{
    expect(generateOperatorsArray("3-5")).toEqual(["-"])
})

test('"3+5+4-7*5" debe ser igual a ["+","+","-","*"]',()=>{
    expect(generateOperatorsArray("3+5+4-7*5")).toEqual(["+","+","-","*"])
})

test('"-600*700+800-600+100/200*500" debe ser igual a ["-","*","+","-","+","/","*"]',()=>{
    expect(generateOperatorsArray("-600*700+800-600+100/200*500")).toEqual(["-","*","+","-","+","/","*"])
})