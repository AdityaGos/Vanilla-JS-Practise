const arr =[1,2,3,4,5]

function checkEven(val , index, arr)
{
   return val%2!==0 ? arr[arr.length-1]*2: val;
}
Array.prototype.myMap= function(cb)
{
    let updatedArr = []
    for( let index = 0; index < this.length; index++ )
    {
        updatedArr.push(cb(this[index], index , this))
    }
    return updatedArr
}


const res =arr.myMap(checkEven)
console.log(res)