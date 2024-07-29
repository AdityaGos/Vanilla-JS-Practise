let car1 = {
    name:"Ferrari",
    color:'red'
}

function purchaseCar (currency, price)
{
    console.log(`I have purchase ${this.name} of ${this.color} for ${currency} ${price}`)
}



// purchaseCar.call(car1,'$',250000)


Function.prototype.myBind = function(context={}, ...arg)
{
    if(typeof this !=='function') throw new Error((this+'It is not callable'))
        context.fn = this
        return function(...newArg)
        {
            return context.fn(...arg , ...newArg)
        }   
}
const newFunction=   purchaseCar.myBind(car1)
newFunction('$',250000)
