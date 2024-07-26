// call is used to borrow a function and can we used with different obj 
// every function has call property
// we pass additional arguments to 


//1. What is call ? 
const person = { name :"Aditya"}

function printName (age){
    return ` Hello ${this.name} is ${age}`
}



console.log(printName())

// solution
//                         (this ,... arguments)
//                         
console.log(printName.call(person , 24))

// here this.name will point to window object that is it will find name withing the printName function 
// name exist inside the object
// to use the object with the function we can call it using call
// can give list of additional arguments inside the call method 



// 2. What is apply ? 

// same as call but additional arguments in form of array instead of list of arguments


function printName1(age,hometown)
{
    return 'Hello '+ age+'! '+hometown
}

//                                   Arrays 
console.log(printName1.apply(person, [22,'Ranchi']))




// 3. What bind ? 
// same as call but it return a new function that can be called later and takes list of arguments

const bindFunction = printName1.bind(person,22, "Bangalore")
console.log(bindFunction)
console.log(bindFunction())



// 4.  Question no 4

const age =20
var person1 ={
name:'Aditya',
age:21,

getAge: function(){ console.log(this.age) }
}

var person2= {age:33}

// we call call it this.age will find the age from outer scope ie lexical scope
person1.getAge()


person1.getAge.call(person2)


// 5. Question no 5

var status = "adi"



setTimeout(()=>{
    const status ='🔗'

    const data ={
        status:'❤',
        //this Keyword: In the context of a method inside an object, this refers to the object itself. So, this.status correctly accesses the status property of the data object.
        getStatus (){ return this.status}
    }

    console.log(data.getStatus())
    console.log(data.getStatus.call(this));
},0)



// 6. Question no 6


const animals = [ { species:'Wild', name:'Lion'},
    { species:'Aquatic', name:'Whale'}

]

function printAnimals(i)
{
    this.print = function ()
    {
        console.log("#"+i+" "+  this.species + ": " +this.name)
    }
    this.print()
}

animals.forEach((elem , index)=>{ 
    printAnimals.call(elem,index+1)
})



// Question no 7

const array =[1,2,3,4]

const newArray  = [5,6,7]

array.push.apply(array,newArray)
console.log(array)



//8. Question  8 find max in array

console.log(Math.max.apply(null,array))

function hello(){ console.log(this)}

hello()


//9. Question

function checkPassword(ok,fail){
    let password = '123'
    if(password ==='123'){ ok()}
    else {fail()}
}

let user = {
    name:"Aditya Goswami",
    login(res){ 
        console.log(this.name + res ? " logged in successfully" : " failed to login")
    }
}
console.log(user.login)
// checkPassword(user.login(true), user.login(false))