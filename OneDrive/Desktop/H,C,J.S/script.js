document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'sujal' && password === '1234') {
        message.style.color = 'green';
        message.textContent = 'Ohhh goooodl!';
    } else {
        message.style.color = 'red';
        message.textContent = ' Fuck password is worng!';
    }
});
