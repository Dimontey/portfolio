const burger =
document.getElementById("burger");

const mobileMenu =
document.getElementById("mobileMenu");

const menuLinks =
document.querySelectorAll(".mobile-menu a");

// Відкрити / закрити меню

burger.addEventListener("click", () => {

    burger.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    document.body.style.overflow =
        mobileMenu.classList.contains("active")
        ? "hidden"
        : "";

});

// Закриття після натискання на пункт меню

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        burger.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

});

// Закриття при натисканні на фон

mobileMenu.addEventListener("click", (e) => {

    if(e.target === mobileMenu){

        burger.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    }

});