const arr = [1,2,3,[[4,5]]]
// console.log(arr.flat(3))


Array.prototype.myflat = function(depth)
{
    let res= []
    // this has access of the array
    if(!Array.isArray(this))
    {
        throw new Error(`${this}.flat is not a function`)
    }
    this.forEach((elem)=>{

        if(Array.isArray(elem) && depth>0)
        {
            // recursively calling myflat method 
            // if the element is a nested array and pushing the element using spread 
            // decreasing the depth
            // we got res = [4,5] then we ... spread it and push to main res array
            res.push(...elem.myflat(depth-1))
        }
        else{
            // if the elem is not an array then just push the element into res arr
            res.push(elem)
        }
    })
    return res
}

console.log(arr.myflat(5))