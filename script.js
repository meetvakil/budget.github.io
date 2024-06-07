document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (username === '' || email === '' || password === '') {
                alert('All fields are required.');
                event.preventDefault();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (username === '' || password === '') {
                alert('All fields are required.');
                event.preventDefault();
            }
        });
    }
});
