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