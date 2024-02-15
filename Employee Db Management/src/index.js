
//IIFE ->Imediately invoked function expression


(async ()=>{
    const data = await fetch('./src/data.json')
    const res = await data.json()
    console.log(res)

    let employees = res
    let selectedEmployeeID = employees[0].id
    let selectedEmployee = employees[0]

    const employeeListRef = document.querySelector('.employees__name--list')
    const employeeInfoRef = document.querySelector('.employees__single--info')

    //Add Employee



    // Select Employee

    employeeListRef.addEventListener('click',(e)=>{
        
        if(e.target.nodeName==='SPAN' && selectedEmployeeID !== e.target.id){

            selectedEmployeeID = e.target.id
            renderEmployee()

            //renderSingleEmployee
        }
        
    } )
    const renderEmployee  = ()=>{
        employeeListRef.innerHTML=""
        employees.forEach((emp)=>{
            const employee = document.createElement('span')
            employee.classList.add('employees__name--item')

            if(parseInt(selectedEmployeeID,10)===emp.id)
            {
                employee.classList.add('selected')
                selectedEmployee=emp
            }

            employee.setAttribute('id',emp.id)

            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class='employeedelete'>❌</i>`
            employeeListRef.append(employee)

        })
    }
    renderEmployee()
})()