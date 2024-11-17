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
document.addEventListener('DOMContentLoaded', () => {
    const articleTitle = localStorage.getItem('articleTitle');
    const articleContent = localStorage.getItem('articleContent');
    const articleDifficulty = localStorage.getItem('articleDifficulty') || 'Не указан';
    const articleKeywords = localStorage.getItem('articleKeywords') || 'Ключевые слова не указаны';

    if (articleTitle && articleContent) {
        document.querySelector('h2').textContent = articleTitle;
        document.querySelector('.textArticle p').textContent = articleContent;

        const additionalInfo = document.createElement('div');
        additionalInfo.innerHTML = `
            <p><strong>Уровень сложности:</strong> ${articleDifficulty}</p>
            <p><strong>Ключевые слова:</strong> ${articleKeywords}</p>
        `;
        document.querySelector('.textArticle').appendChild(additionalInfo);
    } else {
        alert('Данные статьи отсутствуют. Вернитесь и заполните форму.');
    }
});