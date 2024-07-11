let menu = document.getElementById('menu');
let logo = document.getElementById('logo');
console.log(logo);

function toggleMenu() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        logo.style.visibility = "visible"; 
        
    } else {
        menu.style.display = "flex";
        logo.style.visibility = "hidden";
        
    }
}
