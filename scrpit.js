// Function to handle the login
function login() {
    // Get values from the email, password and remember me checkbox
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('Remember').checked;

    // Simple validation
    if (email === '' || password === '') {
        alert("Please fill in both email and password.");
        return;  // Stop the function if validation fails
    }

    // Handle the "Remember me" functionality (for demo purposes, we store email in localStorage)
    if (rememberMe) {
        localStorage.setItem("userEmail", email);  // Save email in localStorage
        alert("You will be remembered.");
    } else {
        localStorage.removeItem("userEmail");  // Remove email from localStorage if checkbox is unchecked
    }

    // Simulate successful login (you can replace this with real login logic)
    alert("Login Successful!");

    // Log values for demo purposes
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe);

    // Optionally, clear the form fields after login
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// You can add an event listener to the button as well
document.querySelector("button").addEventListener("click", login);
