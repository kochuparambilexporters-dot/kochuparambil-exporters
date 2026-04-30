// 1. Initialize the plugin
var phoneInput = document.querySelector("#phone");
var iti = window.intlTelInput(phoneInput, {
    initialCountry: "in",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
});

// 2. Handle the Form Submission
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function (e) {
    // Check if the phone number is valid according to the plugin
    if (!iti.isValidNumber()) {
        e.preventDefault(); // This line STOPS the email from being sent
        alert("Please enter a valid phone number for the selected country.");
        phoneInput.focus();
    }
});
