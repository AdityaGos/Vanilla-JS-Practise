// var x =10
// function foo ()
// {
//     console.log(x)
//     var x=50
// }
// foo()
// log undefined
// in this situation when we call foo function a new execution context is created for the function 
// and we are logging the x and then x is getting defined 
// because in this context var got hoisted with undefined 
// so logging x will be undefined

console.log('first')
function foo()
{
    console.log(x)
   var x =5
   // x= 5 
   // This implicitly creates a global variable x if it does not already exist
}
// foo()
// console.log(x)


for( var i =0;i<3;i++)
{
    setTimeout(()=>{console.log(i)},1000)
}


const user1={
    name:'John',
    logAddress:function(){ return `${this.address.house} ${this.address.locality}` },
    age:22,
    address:{
        house:120,
        locality:'California'
    }
}
// using this will only deep copy all the except function 
// undefined, Infinity, NaN, or Date objects), those will be lost during the serialization and cannot be copied back.

// Performance Overhead: For large or deeply nested objects, serializing and parsing JSON can be relatively slow compared to other deep copy methods, especially if performance is a concern.
const user2= JSON.parse(JSON.stringify(user1))
user2.name='jay'
user2.address.house= 'Loherdaga'
console.log(user1.logAddress())
console.log(user2)