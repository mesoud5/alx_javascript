const error = document.getElementById('error')
const numFields = document.getElementById('numFields').value
function generateInputFields(numFields) {
    const container = document.getElementById('inputContainer')
    container.innerHTML = ''


    for (i=0; i < numFields; i++) {
        const input = document.createElement('input')
        input.type = 'text'
        input.name = 'field' + i
        container.appendChild(input)
        
    }
}

function validateform() {
    const inputs = [...document.querySelectorAll('inputContainer input[type="text"]')]
    const allfilled = inputs.every(input => input.value.trim() !== '')

    if(!allfilled) {
        error.innerHTML = 'Please fill in all fields'
        return false
    }
    return true
}