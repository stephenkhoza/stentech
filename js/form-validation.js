// Function to validate the contact form
function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    // Regular expressions for email validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    let isValid = true;
  
    // Validate name (non-empty)
    if (nameInput.value.trim() === "") {
      isValid = false;
      alert("Name field cannot be empty.");
    }
  
    // Validate email (format)
    if (!emailRegex.test(emailInput.value)) {
      isValid = false;
      alert("Please enter a valid email address.");
    }
  
    // Validate message (non-empty)
    if (messageInput.value.trim() === "") {
      isValid = false;
      alert("Message field cannot be empty.");
    }
  
    return isValid;
  }
  
  // Add form submission event listener
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  }