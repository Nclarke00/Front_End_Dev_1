// forms.js
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var submitButton = document.getElementById('submitButton');

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Your custom code to handle the form submission goes here

        // Redirect to the success.html page
        window.location.href = 'success.html';
    });

    // Event listener for button click (optional)
    submitButton.addEventListener('click', function () {
        // Your custom code to handle the button click goes here
        console.log('Button clicked!');
    });
});
