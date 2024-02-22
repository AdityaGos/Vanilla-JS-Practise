const a = { a:1, b:2, c:3}
const b = { a:1, b:2, c:[3,4]}


const isObject =(object)=>{
    return object !=null && typeof object ==="object"
}

function compareObj( obj1, obj2)
{
    const keyObj1 = Object.keys(obj1)
    const keyObj2 = Object.keys(obj2)

    if(keyObj1.length !== keyObj2.length)
    {
         return false;
    }

    for(let key of keyObj1)
    {
        const value1= obj1[key]
        const value2= obj2[key]

        const boolIsObject = isObject(value1) && isObject(value2)

        if(!boolIsObject && value1 !== value2){ return false}

        if(boolIsObject && !compareObj(value1, value2)){
            return false;

        }

        return true
    }
}

console.log(compareObj(a,b))