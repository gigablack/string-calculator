const stringCalculator = require('../index')

test('"3+5" debe ser igual a 8',()=>{
    expect(stringCalculator("3+5")).toBe(8)
})

test('"3+5" debe ser un numero',()=>{
    expect(stringCalculator("3+5")).not.toBeNaN()
})

test('"-3+5" debe ser igual a 2',()=>{
    expect(stringCalculator("-3+5")).toBe(2)
})

test('"-3+5" debe ser un numero',()=>{
    expect(stringCalculator("-3+5")).not.toBeNaN()
})

test('"3-5" debe ser igual a -2',()=>{
    expect(stringCalculator("3-5")).toBe(-2)
})

test('"3-5" debe ser un numero',()=>{
    expect(stringCalculator("3-5")).not.toBeNaN()
})

test('"3+5+4-7*5" debe ser igual a -23',()=>{
    expect(stringCalculator("3+5+4-7*5")).toBe(-23)
})

test('"3+5+4-7*5" debe ser un numero',()=>{
    expect(stringCalculator("3+5+4-7*5")).not.toBeNaN()
})

test('"-600*700+800-600+100/200*500" debe ser igual a -419550',()=>{
    expect(stringCalculator("-600*700+800-600+100/200*500")).toBe(-419550)
})

test('"-600*700+800-600+100/200*500" debe ser igual a -419550',()=>{
    expect(stringCalculator("-600*700+800-600+100/200*500")).not.toBeNaN()
})