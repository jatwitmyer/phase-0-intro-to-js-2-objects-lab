const employee = {
    name:  "Jordan",
    streetAddress: "P. Sherman, 42 Wallaby Way, Sydney"
}

console.log(employee)

function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
        ...object,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key, value) {
    const updatedEmployee = {...object}
    delete updatedEmployee[key]
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
    delete object[key]
    return object
}
