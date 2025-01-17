document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector("button");

    // Check if button is found
    console.log(submitButton);

    if (submitButton) {
        submitButton.addEventListener("click", function(event) {
            event.preventDefault();

            // Get form inputs and log them for debugging
            const name = document.getElementById("Name");
            const contact = document.getElementById("ContactUs");
            const email = document.getElementById("Email");
            const password = document.getElementById("Password");
            const confirmPassword = document.getElementById("ConfirmPassword");

            // Log the elements to ensure they are not null
            console.log(name, contact, email, password, confirmPassword);

            // Validate fields (make sure all elements are not null before accessing value)
            if (!name || !contact || !email || !password || !confirmPassword) {
                alert("One or more fields are missing or incorrectly referenced.");
                return;
            }

            // Check if values are empty
            if (name.value.trim() === "") {
                alert("Please enter your name.");
                return;
            }

            if (contact.value.trim() === "") {
                alert("Please enter your contact information.");
                return;
            }

            if (email.value.trim() === "") {
                alert("Please enter your email.");
                return;
            }

            if (password.value.trim() === "") {
                alert("Please enter a password.");
                return;
            }

            if (confirmPassword.value.trim() === "") {
                alert("Please confirm your password.");
                return;
            }

            // Validate if password matches confirm password
            if (password.value !== confirmPassword.value) {
                alert("Passwords do not match.");
                return;
            }

            // If everything is valid
            alert("Account created successfully!");
        });
    }
});
