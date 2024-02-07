const name1 ={
    firstName:'Aditya',
    lastName:'Goswami',
}

let printName = function(city, state, Country)
{
    console.log(this.firstName + ' ' + this.lastName + ' from ' + city +' '+ state + ' ' + Country)
}




Function.prototype.myBind = function (...args)
{
    // this -> printName method
    let obj = this
    params = args.slice(1)
    return function(...args2)
    {
        obj.apply(args[0],[...params, ...args2])
    }

}

let fncPrintName = printName.myBind(name1,'Ranchi',)
// what ever we pass in bind function we be received in the return function (...args)
fncPrintName('Jharkhand',' India')