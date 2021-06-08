const employee = {
    name: "John Shellabarger",
    streetAddress: "Nunya"
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]:value})
}

function deleteFromEmployeeByKey(employee, key){
    const employeeCopy = {...employee}
    delete employeeCopy[key]
    return employeeCopy
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee 
}

