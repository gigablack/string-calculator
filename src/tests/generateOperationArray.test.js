const generateOperationArray = require('../libs/generateOperationArray')

test('"3+5",["+"],[3,5] debe ser igual a [3,"+",5]',()=>{
    expect(generateOperationArray("3+5",["+"],[3,5])).toEqual([3,"+",5])
})

test('"-3+5",["-","+"],[3,5] debe ser igual a ["-",3,"+",5]',()=>{
    expect(generateOperationArray("-3+5",["-","+"],[3,5])).toEqual(["-",3,"+",5])
})

test('"3-5",["-"],[3,5] debe ser igual a [3,"-",5]',()=>{
    expect(generateOperationArray("3-5",["-"],[3,5])).toEqual([3,"-",5])
})

test('"3+5+4-7*5",["+","+","-","*"],[3,5,4,7,5] debe ser igual a [3,"+",5,"+",4,"-",7,"*",5]',()=>{
    expect(generateOperationArray("3+5+4-7*5",["+","+","-","*"],[3,5,4,7,5])).toEqual([3,"+",5,"+",4,"-",7,"*",5])
})

test('"-600*700+800-600+100/200*500",["-","*","+","-","+","/","*"],[600,700,800,600,100,200,500] debe ser igual a ["-",600,"*",700,"+",800,"-",600,"+",100,"/",200,"*",500]',()=>{
    expect(generateOperationArray("-600*700+800-600+100/200*500",["-","*","+","-","+","/","*"],[600,700,800,600,100,200,500])).toEqual(["-",600,"*",700,"+",800,"-",600,"+",100,"/",200,"*",500])
})