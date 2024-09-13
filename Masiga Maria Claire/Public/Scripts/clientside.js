document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const successMessage = document.createElement('div');
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.marginTop = '10px';
    successMessage.style.display = 'none';
    successMessage.textContent = 'Form has been successfully submitted!';
    form.insertAdjacentElement('afterend', successMessage);
  
    // Function to clear all error messages
    const clearErrors = () => {
      const errorSpans = document.querySelectorAll('span.invalid');
      errorSpans.forEach(span => {
        span.textContent = '';
      });
    };
  
    //  creating Function to validate the forms
    const validateForm = () => {
      clearErrors();
      let valid = true;
  
      // Validation for Full Name
      const fullnameInput = document.getElementById('fullname');
      if (fullnameInput.value.trim() === '') {
        fullnameInput.nextElementSibling.textContent = 'Full Name is required';
        valid = false;
      }
  
      // Validation for Gender
      const genderSelect = document.getElementById('gender');
      if (genderSelect.value === '') {
        genderSelect.nextElementSibling.textContent = 'Gender is required';
        valid = false;
      }
  
      // Validation for Date of Birth
      const dobInput = document.getElementById('dob');
      if (dobInput.value === '') {
        dobInput.nextElementSibling.textContent = 'Date of Birth is required';
        valid = false;
      }
  
      // Validation for Nationality
      const nationalityInput = document.getElementById('nationality');
      if (nationalityInput.value.trim() === '') {
        nationalityInput.nextElementSibling.textContent = 'Nationality is required';
        valid = false;
      }
  
      // Validation for Phone Number
      const phoneInput = document.getElementById('phone');
      if (!/^\d{10}$/.test(phoneInput.value)) {
        phoneInput.nextElementSibling.textContent = 'Invalid phone number';
        valid = false;
      }
  
      // Validation for Email Address
      const emailInput = document.getElementById('email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        emailInput.nextElementSibling.textContent = 'Invalid email address';
        valid = false;
      }
  
      // Validation for Emergency Phone Number
      const emergencyPhoneInput = document.getElementById('emergency_phone');
      if (!/^\d{10}$/.test(emergencyPhoneInput.value)) {
        emergencyPhoneInput.nextElementSibling.textContent = 'Invalid emergency phone number';
        valid = false;
      }
  
      // Validation for Passport Number
      const passportInput = document.getElementById('passport');
      if (passportInput.value.trim() === '') {
        passportInput.nextElementSibling.textContent = 'Passport Number is required';
        valid = false;
      }
  
      // Validation for Visa Document
      const visaInput = document.getElementById('visa');
      if (!visaInput.files.length) {
        visaInput.nextElementSibling.textContent = 'Visa Document is required';
        valid = false;
      }
  
      // Validation for Departure City
      const departureCityInput = document.getElementById('departure_city');
      if (departureCityInput.value.trim() === '') {
        departureCityInput.nextElementSibling.textContent = 'Departure City is required';
        valid = false;
      }
  
      // Validation for Destination City
      const destinationCityInput = document.getElementById('destination_city');
      if (destinationCityInput.value.trim() === '') {
        destinationCityInput.nextElementSibling.textContent = 'Destination City is required';
        valid = false;
      }
  
      return valid;
    };
  
    // Event listener for form submission
    form.addEventListener('submit', (e) => {
      if (validateForm()) {
        e.preventDefault(); // Prevent actual form submission for demonstration purposes
  
        // Display success message
        successMessage.style.display = 'block';
  
        // Reset form fields after successful submission
        form.reset();
  
        // Optionally, you can hide the success message after a few seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      } else {
        e.preventDefault(); // Prevent form submission if validation fails
      }
    });
  });
  