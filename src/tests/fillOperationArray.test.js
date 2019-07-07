const fillOperationArray = require('../libs/fillOperationArray')

test('[3,5],["+"] debe ser igual a [3,"+",5]',()=>{
    expect(fillOperationArray([3,5],["+"])).toEqual([3,"+",5])
})

test('["-","+"],[3,5] debe ser igual a ["-",3,"+",5]',()=>{
    expect(fillOperationArray(["-","+"],[3,5])).toEqual(["-",3,"+",5])
})

test('[3,5],["-"] debe ser igual a [3,"-",5]',()=>{
    expect(fillOperationArray([3,5],["-"])).toEqual([3,"-",5])
})

test('[3,5,4,7,5],["+","+","-","*"] debe ser igual a [3,"+",5,"+",4,"-",7,"*",5]',()=>{
    expect(fillOperationArray([3,5,4,7,5],["+","+","-","*"])).toEqual([3,"+",5,"+",4,"-",7,"*",5])
})

test('["-","*","+","-","+","/","*"],[600,700,800,600,100,200,500] debe ser igual a ["-",600,"*",700,"+",800,"-",600,"+",100,"/",200,"*",500]',()=>{
    expect(fillOperationArray(["-","*","+","-","+","/","*"],[600,700,800,600,100,200,500])).toEqual(["-",600,"*",700,"+",800,"-",600,"+",100,"/",200,"*",500])
})