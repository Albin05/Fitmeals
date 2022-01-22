const hamburger = document.getElementById('hamburger');
const navmid = document.getElementById('nav-mid');

hamburger.addEventListener('click', () => {
    navmid.classList.toggle('show');
});