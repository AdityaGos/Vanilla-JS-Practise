let promise1 = new Promise((res,rej)=>{
    setTimeout( ()=>{ res('Promise 1 after 2 sec')},2000)
    
})
let promise2 = new Promise((res,rej)=>{
    setTimeout( ()=>{ res('Promise 2 after 1 sec')},1000)
    
})

const promise3 = 42;

// when we use promise.all the promises are resolved in order of sequnece of the promise 
// promise 1 get executed 1 then promise2 got executed
// Promise.all([promise1,promise2]).then(console.log).catch((err)=> console.log(err))

// promise all is a static method 
const isPromise = (variable) => {
    return variable instanceof Promise;
  };
Promise.myAll = function (promiseArr)
{
    console.log(promiseArr.length)
    let result = []
    let promiseCounter = 0;
    return new Promise((resolve, reject)=>{
        
        promiseArr.forEach((promiseValue,index)=>{

            if(isPromise( promiseValue))
            {
                promiseValue.then((res)=>{
                    promiseCounter++;
                    // maintaining the sequence of the promise
                    result[index] = res;
                    if(promiseCounter === promiseArr.length)
                    {
                        resolve(result)
                    }
                })
                 // rejecting if we get any error
                .catch((err)=> { reject(err)})
            }
            else{
                promiseCounter++;
                result[index] = promiseValue
            }
           

           
        })
    })
}

Promise.myAll([promise1,promise2,promise3]).then(console.log).catch((err)=> console.log(err))