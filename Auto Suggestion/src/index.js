// import "./style.css";
import { debounce, getSuggestions } from "./utils.js"


document.addEventListener('DOMContentLoaded', ()=>{
    const suggestionBox = document.getElementById('suggestions-wrapper')
    const inputBox = document.getElementById('search-input')

    const resetState = () => {
        suggestionBox.classList.remove('suggestions-visible')
    }

    const renderSuggestion = (list=[])=>{
        const suggFragment = document.createDocumentFragment();
        list.forEach(item=>{
            const el = document.createElement('div')
            el.innerHTML= item
            el.classList.add('dropdown-item')
            el.setAttribute('data-key',item)
            suggFragment.appendChild(el)
        })
        suggestionBox.innerHTML="";
        suggestionBox.appendChild(suggFragment)
    }

    const handleSearch = async(keyword)=>{
        const result= await getSuggestions(keyword)
        console.log(result)
        if(result.length)
        {
            
            suggestionBox.classList.add('suggestions-visible')
            renderSuggestion(result)
        }
       
        // console.log(result)
    }

    const handleInputChange = (event) => {
        const keyword = event.target.value
        if(keyword)
        {
         const trimKey = keyword.trim()
            handleSearch(trimKey)
        }
        else { 
            resetState()
        }
        
    }

    const handleClick = (event) => {
        const { key } = event.target.dataset
        if(key)
        {
            inputBox.value= key;
            resetState()
        }

    }
    inputBox.addEventListener('input',debounce(handleInputChange,500))
    suggestionBox.addEventListener('click', handleClick)
})


