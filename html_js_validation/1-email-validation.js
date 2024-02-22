document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow custom validation

    // Retrieve the value entered in the password input field
    const email = document.getElementById('email').value;

    // Validate the password
    const isValid = validateEmail(email);

    // Display appropriate error message or allow form submission
    const errorElement = document.getElementById('error');
    if (!isValid) {
        errorElement.textContent = 'Invalid email format';
    } else {
        errorElement.textContent = ''; // Clear any previous error message
        this.submit(); // Submit the form if password is valid
    }
});

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}
