const multiDiv = require('../libs/multiDiv')

test('[3,"+",5] debe ser igual a [3,"+",5]',()=>{
    expect(multiDiv([3,"+",5])).toEqual([3,"+",5])
})

test('[3,"*",5] debe ser igual a [15]',()=>{
    expect(multiDiv([3,"*",5])).toEqual([15])
})

test('[-1,"*",3,"+",5] debe ser igual a [-3,"+",5]',()=>{
    expect(multiDiv([-1,"*",3,"+",5])).toEqual([-3,"+",5])
})

test('[3,-1,"*",5] debe ser igual a [3,-5]',()=>{
    expect(multiDiv([3,-1,"*",5])).toEqual([3,-5])
})

test('[3,"+",5,"+",4,-1,"*",7,"*",5] debe ser igual a [3,"+",5,"+",4,-35]',()=>{
    expect(multiDiv([3,"+",5,"+",4,-1,"*",7,"*",5])).toEqual([3,"+",5,"+",4,-35])
})

test('[-1,"*",600,"*",700,"+",800,-1,"*",600,"+",100,"/",200,"*",500] debe ser igual a [-420000,"+",800,-600,"+",250]',()=>{
    expect(multiDiv([-1,"*",600,"*",700,"+",800,-1,"*",600,"+",100,"/",200,"*",500])).toEqual([-420000,"+",800,-600,"+",250])
})