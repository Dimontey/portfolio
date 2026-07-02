document.addEventListener("DOMContentLoaded", () => {

    const revealItems = [
        ".back-link",
        ".case-badge",
        ".case-left h1",
        ".case-description",
        ".case-buttons",
        ".tech-stack",
        ".case-stats",
        ".overview-content",
        ".overview-card",
        ".solution-header",
        ".solution-card",
        ".gallery-header",
        ".gallery-card"
    ];

    const elements = document.querySelectorAll(
        revealItems.join(",")
    );

    elements.forEach(el => {
        el.classList.add("reveal-item");
    });

    window.addEventListener("load", () => {

    document.querySelectorAll(".hero-reveal").forEach(el => {

        requestAnimationFrame(() => {

            el.classList.add("show");

        });

    });

});

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("reveal-active");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => {
        observer.observe(el);
    });

});