// script.js
function changeColor(element) {
    // Define your desired color here (e.g., "red", "#00aaff", "rgb(255, 0, 0)")
    const desiredColor = "blue"; // Change this to your preferred color
  
    // Remove the current color (if any)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.color = ''; // Reset to the default color
    });
  
    // Set the desired color for the clicked tab
    element.style.color = desiredColor;
  }
  
window.onload = function() {
    // Add interactivity here using JavaScript
    var header = document.querySelector('header h1');
    header.addEventListener('mouseover', function() {
        header.style.color = 'red';
    });
    header.addEventListener('mouseout', function() {
        header.style.color = 'white';
    });
};
/*function validateEmail() {
    // Get the input field and validation result element by their IDs
    var emailInput = document.getElementById("emailInput");
    var validationResult = document.getElementById("validationResult");

    // Regular expression pattern to validate email addresses
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the input value matches the email pattern
    if (emailPattern.test(emailInput.value)) {
        validationResult.textContent = "Email is valid!";
        validationResult.style.color = "green";
    } else {
        validationResult.textContent = "Invalid email address. Please enter a valid email.";
        validationResult.style.color = "red";
    }
}*/