document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        document.body.classList.add("loaded");

    }, 100);

});

const cards = document.querySelectorAll(
    ".project-card"
);

const sectionTitles = document.querySelectorAll(
    ".section-title-animate"
);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            if(entry.target.classList.contains("project-card")){

                const index =
                [...cards].indexOf(entry.target);

                setTimeout(() => {

                    entry.target.classList.add(
                        "visible"
                    );

                }, index * 200);

            } else {

                entry.target.classList.add(
                    "visible"
                );

            }

        }

    });

},

{
    threshold:0.15
}

);

cards.forEach(card => {

    observer.observe(card);

});

sectionTitles.forEach(title => {

    observer.observe(title);

});

const skillElements = document.querySelectorAll(
    ".skills-title, .skills-left, .skills-right"
);

const skillsObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "visible"
            );

        }

    });

},

{
    threshold:0.2
}

);

skillElements.forEach(el => {

    skillsObserver.observe(el);

});

const leftItems =
document.querySelectorAll(
    ".skills-column:first-child li"
);

const rightItems =
document.querySelectorAll(
    ".skills-column:last-child li"
);

leftItems.forEach((item, index) => {

    const delay = index * 180;

    item.style.transitionDelay =
    `${delay}ms`;

});

rightItems.forEach((item, index) => {

    const delay =
    (index * 180) + 90;

    item.style.transitionDelay =
    `${delay}ms`;

});

const skillItems = document.querySelectorAll(
    ".skills-list li"
);

const skillsItemsObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "visible"
            );

        }

    });

},

{
    threshold:0.2
}

);

skillItems.forEach(item => {

    skillsItemsObserver.observe(item);

});

const processCards = document.querySelectorAll(
    ".process-card"
);

const processObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const index =
            [...processCards].indexOf(
                entry.target
            );

            setTimeout(() => {

                entry.target.classList.add(
                    "visible"
                );

            }, index * 250);

        }

    });

},

{
    threshold:0.15
}

);

processCards.forEach(card => {

    processObserver.observe(card);

});

const ctaTitle =
document.querySelector(".cta-title");

const ctaText =
document.querySelector(".cta-text");

const ctaButton =
document.querySelector(".cta-button");

const ctaSocials =
document.querySelectorAll(
    ".cta-socials a"
);

const ctaFooter =
document.querySelectorAll(
    ".cta-footer"
);

const ctaObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "visible"
            );

        }

    });

},

{
    threshold:0.15
}

);

ctaObserver.observe(ctaTitle);
ctaObserver.observe(ctaText);
ctaObserver.observe(ctaButton);

ctaFooter.forEach(el => {

    ctaObserver.observe(el);

});

ctaSocials.forEach((icon, index) => {

    const observer =
    new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                setTimeout(() => {

                    icon.classList.add(
                        "visible"
                    );

                }, index * 150);

            }

        });

    },

    {
        threshold:0.15
    }

    );

    observer.observe(icon);

});

