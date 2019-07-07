const removePlus = require('../libs/removePlus')

test('[3,"+",5] debe ser igual a [3,5]',()=>{
    expect(removePlus([3,"+",5])).toEqual([3,5])
})

test('[-3,"+",5] debe ser igual a [-3,5]',()=>{
    expect(removePlus([-3,"+",5])).toEqual([-3,5])
})

test('[3,"+",5,"+",4,-35] debe ser igual a [3,5,4,-35]',()=>{
    expect(removePlus([3,"+",5,"+",4,-35])).toEqual([3,5,4,-35])
})

test('[-420000,"+",800,-600,"+",250] debe ser igual a [-420000,800,-600,250]',()=>{
    expect(removePlus([-420000,"+",800,-600,"+",250])).toEqual([-420000,800,-600,250])
})