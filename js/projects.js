function initProjects() {

    document.querySelectorAll(".slider").forEach(slider => {

        const slides = slider.querySelectorAll(".slide");

        let index = 0;

        setInterval(() => {

            slides[index].classList.remove("active");

            index = (index + 1) % slides.length;

            slides[index].classList.add("active");

        }, 3000);

    });

    document.querySelectorAll(".toggle-description").forEach(button => {

        button.addEventListener("click", () => {

            const text = button.nextElementSibling;

            text.classList.toggle("show");

            button.textContent = text.classList.contains("show")
                ? "Réduire"
                : "Voir plus";

        });

    });

}