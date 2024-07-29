

let car1 = {
    name:"Ferrari",
    color:'red'
}

function purchaseCar (currency, price)
{
    console.log(`I have purchase ${this.name} of ${this.color} for ${currency} ${price}`)
}



// purchaseCar.call(car1,'$',250000)


Function.prototype.myApply = function(context={}, arg=[])
{
    if(typeof this !=='function') throw new Error((this+'It is not callable'))

    if(!Array.isArray(arg)) { throw new TypeError("Argument must be array")} 
        context.fn = this
        context.fn(...arg)
}


try{
    purchaseCar.myApply(car1,'$',250000)
}catch(e){ console.log(e)}