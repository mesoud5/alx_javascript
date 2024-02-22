// Move this line inside the generateInputFields function
// since we want to get the current value of numFields
function generateInputFields(numFields) {
    const error = document.getElementById('error'); // Moved inside the function
    const container = document.getElementById('inputContainer');
    container.innerHTML = '';

    for (let i = 0; i < numFields; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        container.appendChild(input);
    }
}

function validateform() {
    const error = document.getElementById('error'); // Moved inside the function
    const inputs = [...document.querySelectorAll('#inputContainer input[type="text"]')];
    const allfilled = inputs.every(input => input.value.trim() !== '');

    if (!allfilled) {
        error.innerHTML = 'Please fill in all fields';
        return false;
    }
    return true;
}
