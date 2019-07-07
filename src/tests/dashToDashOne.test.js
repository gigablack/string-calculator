const dashToDashOne = require('../libs/dashToDashOne')

test('[3,"+",5] debe ser igual a [3,"+",5]',()=>{
    expect(dashToDashOne([3,"+",5])).toEqual([3,"+",5])
})

test('["-",3,"+",5] debe ser igual a [-1,"*",3,"+",5]',()=>{
    expect(dashToDashOne(["-",3,"+",5])).toEqual([-1,"*",3,"+",5])
})

test('[3,"-",5] debe ser igual a [3,-1,"*",5]',()=>{
    expect(dashToDashOne([3,"-",5])).toEqual([3,-1,"*",5])
})

test('[3,"+",5,"+",4,"-",7,"*",5] debe ser igual a [3,"+",5,"+",4,-1,"*",7,"*",5]',()=>{
    expect(dashToDashOne([3,"+",5,"+",4,"-",7,"*",5])).toEqual([3,"+",5,"+",4,-1,"*",7,"*",5])
})

test('["-",600,"*",700,"+",800,"-",600,"+",100,"/",200,"*",500] debe ser igual a [-1,"*",600,"*",700,"+",800,-1,"*",600,"+",100,"/",200,"*",500]',()=>{
    expect(dashToDashOne(["-",600,"*",700,"+",800,"-",600,"+",100,"/",200,"*",500])).toEqual([-1,"*",600,"*",700,"+",800,-1,"*",600,"+",100,"/",200,"*",500])
})