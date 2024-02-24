document.addEventListener('DOMContentLoaded', ()=>{

const Add_button = document.getElementById('add')
const ITEM_CONTAINER = document.getElementById('item')
const ITEM_TEMPLATE = document.getElementById('itemTemplate')

const todos = getTodos()
function getTodos ()
{
    const todos = localStorage.getItem('todos') ||[]

    return JSON.parse(todos)

}


function setTodos (items)
{
    const todosJSON  = JSON.stringify(items)
    localStorage.setItem('todos', todosJSON)
}

function addTodo()
{
    todos.unshift({
        description:"",
        completed:false
    })

    refreshTodos()
}

function refreshTodos()
{
    ITEM_CONTAINER.innerHTML=""
    for(const todo of todos)
    {
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true)
        const descriptionInput = itemElement.querySelector('.item__description')
        const completedInput = itemElement.querySelector('.item__completed')
        descriptionInput.value = item.description
        completedInput.checked = item.completed

    }
}
})