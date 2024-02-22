document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow custom validation

    // Retrieve the value entered in the password input field
    const password = document.getElementById('password').value;

    // Validate the password
    const isValid = validatePassword(password);

    // Display appropriate error message or allow form submission
    const errorElement = document.getElementById('error');
    if (!isValid) {
        errorElement.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%^&*)';
    } else {
        errorElement.textContent = ''; // Clear any previous error message
        this.submit(); // Submit the form if password is valid
    }
});

function validatePassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return pattern.test(password);
}
