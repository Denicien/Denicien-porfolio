async function loadPage(page) {

    const response = await fetch(`pages/${page}.html`);

    const html = await response.text();

    app.innerHTML = html;

    updateActiveLink(page);

    if (page === "projects") {

        initProjects();

    }

}

function updateActiveLink(page) {

    document.querySelectorAll(".nav-link").forEach(link => {

        link.classList.remove("active");

        if (link.dataset.page === page) {

            link.classList.add("active");

        }

    });

}
document.addEventListener("click", (e) => {

    const link = e.target.closest("[data-page]");

    if (!link) return;

    e.preventDefault();

    loadPage(link.dataset.page);

});