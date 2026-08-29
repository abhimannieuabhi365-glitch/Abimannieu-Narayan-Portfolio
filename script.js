/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });


    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal-item");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.10,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("revealed");

    });

}


/* =========================================================
   STAGGERED ANIMATION
========================================================= */

const staggerGroups = [

    ".skills-grid",

    ".certification-grid",

    ".stats-container"

];


staggerGroups.forEach((selector) => {

    document.querySelectorAll(selector)
        .forEach((group) => {

            Array.from(group.children)
                .forEach((child, index) => {

                    child.style.transitionDelay =
                        `${0.05 + index * 0.08}s`;

                });

        });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


if ("IntersectionObserver" in window) {

    const sectionObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        navigationLinks
                            .forEach((link) => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute("href")
                                    ===
                                    `#${entry.target.id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            });

                    }

                });

            },

            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }

        );


    sections.forEach((section) => {

        sectionObserver.observe(section);

    });

}


/* =========================================================
   RESUME / EXTERNAL LINKS
========================================================= */

document.querySelectorAll(
    'a[href="#"]'
).forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "GitHub link will be added once the final repository URL is confirmed."
        );

    });

});