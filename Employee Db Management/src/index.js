
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

    const createEmployee = document.querySelector('.createEmployee')
    const editEmployee = document.querySelector('.editEmployee')
    const addEmployeeModal = document.querySelector('.addEmployee')
    const addEmployeeForm = document.querySelector('.addEmployee_create')
    let editMode

    createEmployee.addEventListener('click', ()=>{
        addEmployeeModal.style.display="flex"
    })
    editEmployee.addEventListener('click', ()=>{
        addEmployeeModal.style.display="flex"
        editMode = true;
        setFormToEdit()
    })
//                      need to have event in the argument to use it inside callback
    addEmployeeModal.addEventListener('click',(e)=>{

        if(e.target.className=='addEmployee'){
            addEmployeeModal.style.display="none"
        }
    })

    const dobInput = document.querySelector('.addEmployee_create--dob')
    dobInput.max = `${new Date().getFullYear()-18} -${new Date().toISOString().slice(5,10)}`

    
    //Add Employee

    addEmployeeForm.addEventListener('submit',(e)=>{
        // don't refresh the page 
        e.preventDefault()
     
        const formData = new FormData(addEmployeeForm)
        const values = [...formData.entries()]
        let employeeData = {}
        if (editMode) {
            // Update details of the selected employee
            console.log('inside edit')
            updateEmployeeDetails(selectedEmployeeID, values);
            editMode = false;
        } else {
            // Add a new employee record
            values.forEach(value=>{

                employeeData[value[0]]=value[1]
            })
    
            employeeData.id = employees.length>0 ? employees[employees.length-1]?.id+1 : 1
            employeeData.age = new Date().getFullYear() -parseInt(employeeData.dob.slice(0,4),10)
            employeeData.imageUrl = employeeData.imageUrl 
            employees.push(employeeData)
        }
     
        if(employees.length===1)
        {
            selectedEmployee = employees[0]
            selectedEmployeeID= employees[0].id

        }
        renderEmployee()
        addEmployeeForm.reset()
        addEmployeeModal.style.display="none"

    })

    // Select Employee

    employeeListRef.addEventListener('click',(e)=>{
        
        if(e.target.nodeName==='SPAN' && selectedEmployeeID !== e.target.id){

            selectedEmployeeID = e.target.id
            renderEmployee()

            //renderSingleEmployee
            renderSingleEmployee()
        }
        if(e.target.tagName==='I')
        {
            employees = employees.filter((emp) => String(emp.id)!== e.target.parentNode.id)
            if(String(selectedEmployeeID)===e.target.parentNode.id)
            {
                console.log('inside selected employee')
                selectedEmployeeID = employees[0]?.id || -1;
                selectedEmployee = employees[0] || {}
                renderSingleEmployee()
    
            }
          
        }
       
        renderEmployee()
    } )
    const renderEmployee  = ()=>{

        if(selectedEmployeeID ===-1)
        {
            employeeListRef.innerHTML=""
            return;
        }
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

    const renderSingleEmployee = ()=>{
        if(selectedEmployeeID ===-1)
        {
            employeeInfoRef.innerHTML=""
            return;
        }
        employeeInfoRef.innerHTML=`
        <img src = "${selectedEmployee.imageUrl}"/ >
        <span class="employee__single--heading"> 
            ${selectedEmployee.firstName} ${selectedEmployee.lastName} ${selectedEmployee.age}
        </span>

        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>${selectedEmployee.contactNumber}</span>
        <span>${selectedEmployee.dob}</span>
        `
        
    }

    function setFormToEdit(){
        const formFields = addEmployeeForm.elements;
        formFields.firstName.value = selectedEmployee.firstName;
        formFields.lastName.value = selectedEmployee.lastName;
        formFields.imageUrl.value = selectedEmployee.imageUrl || '';
        formFields.email.value = selectedEmployee.email;
        formFields.contactNumber.value = selectedEmployee.contactNumber;
        formFields.salary.value = selectedEmployee.salary;
        formFields.address.value = selectedEmployee.address;
        formFields.dob.value = selectedEmployee.dob;
    // addEmployeeForm.children[0].children[0].value = selectedEmployee.firstName
    // addEmployeeForm.children[0].children[1].value = selectedEmployee.lastName
    // addEmployeeForm.children[1].value=selectedEmployee.imageUrl
    // addEmployeeForm.children[2].value=selectedEmployee.email
    // addEmployeeForm.children[3].value=selectedEmployee.contactNumber
    // addEmployeeForm.children[4].value=selectedEmployee.salary
    // addEmployeeForm.children[5].value=selectedEmployee.address
    // addEmployeeForm.children[6].value=selectedEmployee.dob

    // addEmployeeForm.addEventListener('submit', (e)=>{
    //     e.preventDefault()
    //     const formData = new FormData(addEmployeeForm)
    //     const values = [...formData.entries()]
    //     console.log(values)
    // })
    }
    function updateEmployeeDetails(employeeID, updatedData) {
  
        const employeeIndex = employees.findIndex(employee => String(employee.id) === employeeID);
        const editEmployee = employees[employeeIndex]

        if (employeeIndex != -1) {
            updatedData.forEach((val)=>{    
                const key= val[0]
                const value = val[1]
          
                editEmployee[key]= value
           })
        }
      
        renderEmployee();
        renderSingleEmployee()
    }
    renderEmployee()
    if(employees.length>=0) {renderSingleEmployee() }
})()