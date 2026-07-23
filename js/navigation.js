const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", (e)=>{

        e.preventDefault();

        const page = link.dataset.page;

        loadPage(page);

    });

});
const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    overlay.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(navMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-link").forEach(link=>{

    link.addEventListener("click", closeMenu);

});

function closeMenu(){

    navMenu.classList.remove("active");

    overlay.classList.remove("active");

    menuToggle.querySelector("i").classList.remove("fa-xmark");

    menuToggle.querySelector("i").classList.add("fa-bars");

}