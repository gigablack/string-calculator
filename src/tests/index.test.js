const stringCalculator = require('../index')

test('"3+5" debe ser igual a 8',()=>{
    expect(stringCalculator("3+5")).toBe(8)
})

test('"3+5" debe ser un numero',()=>{
    expect(stringCalculator("3+5")).not.toBeNaN()
})

test('"3" debe ser igual a 3',()=>{
    expect(stringCalculator("3")).toBe(3)
})

test('"3" debe ser un numero',()=>{
    expect(stringCalculator("3")).not.toBeNaN()
})

test('"-3" debe ser igual a -3',()=>{
    expect(stringCalculator("-3")).toBe(-3)
})

test('"-3" debe ser un numero',()=>{
    expect(stringCalculator("-3")).not.toBeNaN()
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

test('"-600*700+800-600+100/200*500" debe ser un numero',()=>{
    expect(stringCalculator("-600*700+800-600+100/200*500")).not.toBeNaN()
})

test('"-60*70+80-60+10/20*50-5*7/8" debe ser cercano a -4159.375',()=>{
    expect(stringCalculator("-60*70+80-60+10/20*50-5*7/8")).toBeCloseTo(-4159.375)
})

test('"-60*70+80-60+10/20*50-5*7/8" debe ser un numero',()=>{
    expect(stringCalculator("-60*70+80-60+10/20*50-5*7/8")).not.toBeNaN()
})