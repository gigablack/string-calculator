const generateNumArray = require('../libs/generateNumArray')

test('["3","5"] debe ser igual a [3,5]',()=>{
    expect(generateNumArray(["3","5"])).toEqual([3,5])
})

test('["3","5","4","7","5"] debe ser igual a [3,5,4,7,5]',()=>{
    expect(generateNumArray(["3","5","4","7","5"])).toEqual([3,5,4,7,5])
})

test('["600","700","800","600","100","200","500"] debe ser igual a [600,700,800,600,100,200,500]',()=>{
    expect(generateNumArray(["600","700","800","600","100","200","500"])).toEqual([600,700,800,600,100,200,500])
})

test('["2.2","2"] debe ser igual a [2.2,2]',()=>{
    expect(generateNumArray(["2.2","2"])).toStrictEqual([2.2,2])
})