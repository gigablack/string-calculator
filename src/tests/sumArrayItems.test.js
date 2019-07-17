const sumArrayItems = require('../libs/sumArrayItems')

test('[3,"+",5] debe ser igual a 8',()=>{
    expect(sumArrayItems([3,"+",5])).toBe(8)
})

test('[3,"+",5] debe ser un numero',()=>{
    expect(sumArrayItems([3,"+",5])).not.toBeNaN()
})

test('[15] debe ser igual a 15',()=>{
    expect(sumArrayItems([15])).toBe(15)
})

test('[15] debe ser un numero',()=>{
    expect(sumArrayItems([15])).not.toBeNaN()
})

test('[-3,"+",5] debe ser igual a 2',()=>{
    expect(sumArrayItems([-3,"+",5])).toBe(2)
})

test('[-3,"+",5] debe ser un numero',()=>{
    expect(sumArrayItems([-3,"+",5])).not.toBeNaN()
})

test('[3,-5] debe ser igual a -2',()=>{
    expect(sumArrayItems([3,-5])).toBe(-2)
})

test('[3,-5] debe ser un numero',()=>{
    expect(sumArrayItems([3,-5])).not.toBeNaN()
})

test('[3,"+",5,"+",4,-35] debe ser igual a -23',()=>{
    expect(sumArrayItems([3,"+",5,"+",4,-35])).toBe(-23)
})

test('[3,"+",5,"+",4,-35] debe ser un numero',()=>{
    expect(sumArrayItems([3,"+",5,"+",4,-35])).not.toBeNaN()
})

test('[-420000,"+",800,-600,"+",250] debe ser igual a -419550',()=>{
    expect(sumArrayItems([-420000,"+",800,-600,"+",250])).toBe(-419550)
})

test('[-420000,"+",800,-600,"+",250] debe ser un numero',()=>{
    expect(sumArrayItems([-420000,"+",800,-600,"+",250])).not.toBeNaN()
})

test('[2.2,"+",2] debe ser cercano a 4.2',()=>{
    expect(sumArrayItems([2.2,"+",2])).toBeCloseTo(4.2)
})

test('[2.2,"+",2] debe ser un numero',()=>{
    expect(sumArrayItems([2.2,"+",2])).not.toBeNaN()
})