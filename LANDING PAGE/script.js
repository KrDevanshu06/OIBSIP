document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;

        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Here you would typically handle the form submission, such as sending it to a server
        console.log('Email:', email);
        console.log('Password:', password);

        // Close the modal after submission
        $('#signupModal').modal('hide');
    });
});
