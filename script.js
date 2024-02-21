document.addEventListener('DOMContentLoaded', function() {
document.getElementById('signInForm').addEventListener('submit', signIn);
document.getElementById('signUpForm').addEventListener('submit', signUp);
});



function signIn(event) {
    // Validation for Sign In form
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('signinpassword').value.trim();
    console.log(password);
   //trim used for removal of whitespaces
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        console.log("Entered");
        alert('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
    }
}

function signUp(event) {
    event.preventDefault();
    // Validation for Sign Up form
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('signuppassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validation for required fields
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '' || age === '' || gender === '' || address === '' || phone === '') {
        alert('Please fill in all the required fields.');
        return false;
    }

    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate password strength using regex
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
    }

    // Validate age as a number
    if (isNaN(age) || age < 18 || age > 100) {
        alert('Please enter a valid age between 18 and 100.');
        return false;
    }

    // If all validations pass, form submission can proceed
    alert('Sign Up successful!');
    return true;
}
