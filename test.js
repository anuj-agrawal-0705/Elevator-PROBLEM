var array = [2,3,5,2,8,4,1]
var test = []

var a = array.find((a)=>{
    if(a>2)
    test.push(a)
})

console.log(test)

test = test.filter((floor)=>{
    if(floor>3)
        console.log('sd')
    return floor >3
})

var arr=[6,5,13,41]
console.log(arr.sort())
console.log(test)