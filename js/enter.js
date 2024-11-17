function saveUserData(event) {

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const userData = {
        username: username,
        password: password 
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert("Данные пользователя сохранены!");
}

document.querySelector('form').addEventListener('submit', saveUserData);

document.getElementById('login-btn').addEventListener('click', function () {
    window.location.href = 'content.html'; 
});
