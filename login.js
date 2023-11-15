const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', function (e) {
e.preventDefault();
const username = document.getElementById('login-username').value;
const password = document.getElementById('login-password').value;
const error = document.getElementById('error');

if (username.trim() === '' || password.trim() === '') {
    error.innerText = "Username and password are required";
    return;
}

if (username === 'anastasija' && password === 'anastasija123') {
    window.location.href = 'web_page.html';
} else {
    error.innerText = "Credentials don't match";
}
});