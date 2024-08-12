let menu = document.getElementById('menu');
let logo = document.getElementById('logo');
let header = document.getElementById('header');

function toggleMenu() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        logo.style.visibility = "visible"; 
        
    } else {
        menu.style.display = "flex";
        logo.style.visibility = "hidden";
        
    }
}