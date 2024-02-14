console.log('connected')

document.addEventListener('DOMContentLoaded',()=>{

    const handleButtonClick = async(user)=>{
        console.log('user clicked'+user)
        try {
            const result = await fetch("http://localhost:3000/search", {
              method: "GET",
              headers: { 
              "Content-Type": "application/json" ,
              "user": user
            },
            });
            console.log(result)
            const userFromServer = await result.text()
            if (!result.ok) {
              throw new Error(`HTTP error! Status: ${result.status}`);
            }
           console.log(userFromServer)
          } catch {
            (error) => console.log(error);
          }
    }
    const buttonContainRef = document.querySelector('.button-container');
    
    buttonContainRef.addEventListener('click',(e)=>{

        if(e.target.nodeName==='BUTTON')
        {
            handleButtonClick(e.target.innerText)
        }
    })

    
})


var x =10
function foo()
{
    console.log(x)
   var x=5
}

foo()