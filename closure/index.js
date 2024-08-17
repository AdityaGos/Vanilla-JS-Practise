console.log("connected")



function x()
{
    var a ="Aditya"

    function y (){
        console.log(a)
    }
    // whe we are returning y as function it not only return the function but the closure was returned
    // function along with its lexical scope
    return y
}

let z = x()

let val=0
for(let i=0;i<1000;i++)
{
    val++;
}

//even after calling this after the x function has been called and its removed from the execution stack
// but y function remember its lexical scope , where is came from
z()


// 2 Closure chaining 


// globalName variable is in global scope
let globalName='Aditya'
function a()
{
    // myName variable is in outer function scope
    let myName = "Ayush"
    return function b()
    {
        // inner scope 
        console.log("Hi"+myName +" Meet"+ globalName)
    }
}

a()()

//3.  Data privacy using closure 


function counter()
{
    let count=0;

    return function incrementCount()
    {
        count++;
        console.log(count)
    }
}


var counter1= counter()
counter1() //1
counter1() //2 

var counter2= counter()
counter2() //1

// counter2 and counter1 will have separate closure to the counter function and count variable will 


// 4 . Constructor function


function counterFunc()
{
    let count=0;

    this.incrementCount = function()
    {
        count++;
        console.log(count)
    }
    this.decrementCount = function()
    {
        count--;
        console.log(count)
    }
}


var counter3 = new counterFunc();
counter3.incrementCount()
counter3.incrementCount()

// 5 . closure formed by the inner function will have snapshot of the outer function and its variable 
// even if the variable are declared after the nested function 
function a ()
{

     function b()
    {
        console.log("count b "+count)
    }
    let count=9
    return b
}

a()()

//6 . 



function createBase(num)
{
    return function (sum)
    {
        return sum + num;
    }
}

var addSix = createBase(6)
console.log(addSix(5))


// 7 . optimizing code with closure 


function find ()
{
    let a = []
    for(let i=0;i<1000000;i++)
    {
        a[i] = i*i;

    }

    return function(index)
    {
        console.log(a[index])
    }
}


const closure = find()

closure(6)


// 8 . 
function printCount()
{
    for( var i =0;i<3;i++)
{
    setTimeout(()=>{ console.log(i)},i*1000)
    console.log(i)
}
}
//Because var is function-scoped, all three callbacks share the same instance of the i variable.
// By the time the callbacks are executed, the loop has already completed, and i has been incremented to 3.
// Therefore, all the callbacks reference the same i variable, which has the final value of 3
printCount()

//9 . How to let function be called only once * Not optimized

let view
function subscribe()
{   
    let called = 0;

    return function()
    {
        if(called>0)
        {
            console.log('Already')
        }
        else{ 

            view='Skynet'
            console.log("Hello "+view)
            called++;
        }
    }
    



}

let sub = subscribe()
sub()
sub()
sub()



//10 . Polyfill