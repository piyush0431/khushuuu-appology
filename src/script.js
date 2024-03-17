onload = () => {
    document.getElementById('sonaa').style.display = 'block';
};

document.getElementById('sonaa').onclick = (function () {
    document.getElementById('sonaa').remove()
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        clearTimeout(c);
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        const nextPg = document.querySelector('#sonaa');
        nextPg.style.opacity = '1';
        nextPg.style.transform = 'scale(1)';
    }, 3000);
});