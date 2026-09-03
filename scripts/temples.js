/* year for footer */
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

/* last modified time for footer */
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// hamburger Button 
const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuButton.classList.toggle('open');
});