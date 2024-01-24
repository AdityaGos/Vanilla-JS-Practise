const getData =()=>{
    console.log('searching ..')
}


const doSomeMagic=(fnc,delay)=>{
    let timer;

    return function(){
        // converting the function into debounced function
        const context=this;
        const arg = arguments
        clearTimeout(timer)
       timer=setTimeout(( )=>{fnc.apply(context,arg)},delay);
    }
}
const betterSearch = doSomeMagic(getData,300)