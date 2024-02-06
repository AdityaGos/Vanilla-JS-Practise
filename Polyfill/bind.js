let name1 = {
    firstName:'Aditya',
    lastName:'Goswami',
}

// suppose we have another object name2

 let name2 ={
    firstName:'Rajat',
    'lastName':' Kumar'
 }
 let printFullName = function(hometown,age)
 { console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + age); }

 // How we can use the printFullName method with name2 obj
 // using call method we can do function borrowing 
 // call -> function borrowing 

// name1.printFullName()

printFullName.call(name2,'Ranchi',22)
printFullName.apply(name1,['Chattisghard',22])

let printName = printFullName.bind(name1, 'Bilasput',22)
console.log(printName)
