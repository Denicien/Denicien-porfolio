const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", (e)=>{

        e.preventDefault();

        const page = link.dataset.page;

        loadPage(page);

    });

});