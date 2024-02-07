const arr =[ 1,2,3,4,5]

const answer = arr.reduce((acc, cur,index,arr)=>{ 
    return acc+arr[index]
},0)
// console.log(answer)

Array.prototype.myReduce = function (cb , initialValue){

    let acc= initialValue? initialValue : 0;
    for( let index = 0; index < this.length; index++ )
    {
        acc = cb(acc, this[index])
    }
    return acc
}

const res = arr.myReduce((acc ,curr)=>{ return acc+ curr},2)
console.log(res)