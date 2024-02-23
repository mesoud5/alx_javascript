function handleFormSubmit(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const error = document.getElementById('error')
    if (name === ''|| email === '') {
        error.innerHTML="Please fill in all required fields"
        return false
    }else {
        error.innerHTML="Form submitted successfully!"
        return true
    }

}