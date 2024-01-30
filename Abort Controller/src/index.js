
let SearchedMovieResult = []
document.addEventListener('DOMContentLoaded',()=>{

    const searchBox = document.getElementById('search-input')
    console.log(searchBox)

    const handleInput = async (event) => {
        const keyword = event.target.value ;
        const trimKeyword = keyword.trim();
        // getMovies(trimKeyword).then((res)=>  {console.log(res)}).catch((err)=> console.log(err))
        console.log('inside handleInput')
        
       try{ 
        const result = await fetch('http://localhost:3000/search',{
            method:'POST',
            header:{ 'Content-Type': 'application/json'},
            body: JSON.stringify({ searchVal: trimKeyword }),

        })
        if(!result.ok)
        {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }
    }
        catch { (error=> console.log(error)) }
        // const res = await res.json()lt.json()
       
    }
    searchBox.addEventListener('input', handleInput)


})