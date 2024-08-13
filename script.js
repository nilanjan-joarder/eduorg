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
window.addEventListener('scroll', function () {
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

    setTimeout(function () {
        document.getElementById('popup').style.display = 'flex';
    }, 6000);

    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });
    // document.querySelector(".preloader").style.transform = "translateY(-100vh)"
})



function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            window.location.href = '/'; // Redirect to the home page
        } else {
            alert('There was a problem with the submission. Please try again.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was a problem with the submission. Please try again.');
    });

    return false; // Prevent default form submission behavior
}