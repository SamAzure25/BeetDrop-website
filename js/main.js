/* =========================================================
   BEETDROP WEBSITE
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("mobileMenuToggle");
    const navigation = document.getElementById("mainNavigation");

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen.toString()
        );

    });


    /*
     * Close the mobile navigation after
     * selecting a navigation link.
     */

    const navigationLinks =
        navigation.querySelectorAll(".nav-link");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});