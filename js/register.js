function saveUserData(event) {

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const email = document.querySelector('input[type="textEmail"]').value;
    const passworAgain = document.querySelector('input[type="passwordAg"]').value;
    const userData = {
        username: username,
        password: password,
        email: email,
        passworAgain: passworAgain,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert("Данные пользователя сохранены!");
}

document.querySelector('form').addEventListener('submit', saveUserData);

document.getElementById('register-btn').addEventListener('click', function () {
    window.location.href = 'content.html'; 
});
