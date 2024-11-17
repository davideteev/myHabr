document.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('articleTitle');
    const savedContent = localStorage.getItem('articleContent');

    if (savedTitle && savedContent) {
        document.querySelector('.publication-text').textContent = savedContent;
    }
});

document.querySelector('form.setting-article-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const difficulty = document.querySelector('input[name="difficulty"]:checked')?.value || 'Не указан';
    const keywords = document.querySelector('.keyword-input').value;

    localStorage.setItem('articleDifficulty', difficulty);
    localStorage.setItem('articleKeywords', keywords);

    window.location.href = 'content.html'; 
});


document.getElementById('image-upload-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgPreview = document.createElement('img');
            imgPreview.src = e.target.result;
            imgPreview.style.maxWidth = '200px';
            imgPreview.style.marginTop = '10px';

            const uploadContainer = document.querySelector('.image-upload-container');
            const existingPreview = uploadContainer.querySelector('img');
            if (existingPreview) {
                uploadContainer.removeChild(existingPreview);
            }
            uploadContainer.appendChild(imgPreview);
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById('back-to-publication-btn').addEventListener('click', function () {
    window.location.href = 'index.html'; 
});