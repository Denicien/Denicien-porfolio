const app = document.getElementById("app");

async function loadPage(page){

    const response = await fetch(`pages/${page}.html`);

    const html = await response.text();

    app.innerHTML = html;
    if (page === "projects") {
        initProjects();
    }

}