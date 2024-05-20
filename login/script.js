document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    if (username === 'user' && password === 'password') {
        messageElement.innerText = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.innerText = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
});
