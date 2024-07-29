

let car1 = {
    name:"Ferrari",
    color:'red'
}

function purchaseCar (currency, price)
{
    console.log(`I have purchase ${this.name} of ${this.color} for ${currency} ${price}`)
}



// purchaseCar.call(car1,'$',250000)


Function.prototype.myCall = function(context={}, ...args)
{
    console.log(this)
    if(typeof this !=='function') throw new Error((this+'It is not callable'))
        context.fn = this
        context.fn(...args)
}
let num=2

try{ 
    purchaseCar.myCall(car1,'$',250000)
}catch(er){ console.log(er)}