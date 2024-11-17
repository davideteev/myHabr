document.getElementById('next-to-settings-btn').addEventListener('click', () => {
    const title = document.querySelector('input[placeholder="Заголовок"]').value;
    const content = document.querySelector('textarea[placeholder="Содержание статьи"]').value;

    if (title && content) {
        localStorage.setItem('articleTitle', title);
        localStorage.setItem('articleContent', content);
        window.location.href = 'setting.html'; 
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

function toggleAccounts() {
    const accountItems = document.querySelectorAll('.account-list .account-item');
    const toggleBtn = document.querySelector('.toggle-btn');

    const areAccountsVisible = accountItems[3].style.display === 'flex';

    if (areAccountsVisible) {

        for (let i = 3; i < accountItems.length; i++) {
            accountItems[i].style.display = 'none';
        }
        toggleBtn.textContent = 'Показать больше';
    } else {
        for (let i = 3; i < accountItems.length; i++) {
            accountItems[i].style.display = 'flex';
        }
        toggleBtn.textContent = 'Свернуть';
    }
}