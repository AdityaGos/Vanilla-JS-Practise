
const arr = [1,2,3,[4,5]]
// shallow copy using spread operator 
// const newArray = arr is just referring the newArray to arr instance
// editing the newArray will modify the original arr 
// memory allocation is same 
const newArray = [...arr]
// Deep copy
const newArr  = JSON.parse(JSON.stringify(arr))
newArr[3].push(22)
// console.log(arr)
// console.log(newArr)

const obj1 = {
    a:{
        b:{ name:'Aditya'},
    },
}


function deepCopy(val)
{
    if(["string", "number", "boolean"].includes(typeof val))
    {
        return val
    }
    else if(Array.isArray(val))
    {
        return val.map((el)=>deepCopy(el))
    }

    else{
        return Object.keys(val).reduce((acc,curr)=>{
            acc[curr]= deepCopy(val[curr])
            console.log(acc)
            return acc
        },{})
    }
}

const res = deepCopy(arr)
res[3].push(2)
console.log(arr)
console.log(res)

const obj2= deepCopy(obj1)
console.log('-----------------')
obj2.a.b.age=22
console.log(obj1)
console.log(obj2)