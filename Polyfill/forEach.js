// 

const arr = [ 1,2,3,4,5]
// arr.forEach((element)=>{ console.log(element) })

// creating a polyfill for forEach function 

function printElement (element) {
console.log(element)
}
Array.prototype.myForEach = function(cb){
    console.log('this'+ this)
    for( let index=0;index<this.length;index++)
    {
        printElement(this[index])
    }
}
arr.myForEach(printElement)