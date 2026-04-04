// ПЕРЕМИКАЧ ТЕМИ
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// АВТОМАТИЧНА ТЕМА ЗА ЧАСОМ
function autoTheme() {
    const hour = new Date().getHours();
    if (hour < 7 || hour >= 21) {
        document.body.classList.add('dark-mode');
    }
}
autoTheme();

// LOCAL STORAGE
const info = {
    browser: navigator.userAgent,
    platform: navigator.platform
};
localStorage.setItem('systemInfo', JSON.stringify(info));
document.getElementById('storage-info').innerText = "LocalStorage: " + info.browser;

// API КОМЕНТАРІ (варіант 23 як на скрині)
async function getComments() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/23/comments');
        const data = await res.json();
        const container = document.getElementById('comments-container');
        container.innerHTML = '';
        data.forEach(c => {
            container.innerHTML += `<div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:5px;">
                <strong>${c.name}</strong><br><small>${c.email}</small><p>${c.body}</p>
            </div>`;
        });
    } catch (e) { console.log(e); }
}
getComments();

// МОДАЛЬНЕ ВІКНО ЧЕРЕЗ 1 ХВИЛИНУ
setTimeout(() => {
    document.getElementById('contactModal').style.display = 'flex';
}, 60000);

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}
