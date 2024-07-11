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
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



window.addEventListener("load", () => {
    document.querySelector(".preloader").style.opacity = "0";
    let loader = setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 2000)

    setTimeout(function() {
        document.getElementById('popup').style.display = 'flex';
    }, 6000);

    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
    // document.querySelector(".preloader").style.transform = "translateY(-100vh)"
})



