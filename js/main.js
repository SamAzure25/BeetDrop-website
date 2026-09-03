document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("mobileMenuToggle");
    const navigation = document.getElementById("mainNavigation");

    if (!menuToggle || !navigation) {
        return;
    }


    /* =====================================================
       OPEN / CLOSE NAVIGATION
    ===================================================== */

    const closeMenu = () => {

        navigation.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");
    };


    const openMenu = () => {

        navigation.classList.add("open");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add("menu-open");
    };


    menuToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen =
            navigation.classList.contains("open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    /* =====================================================
       CLOSE WHEN NAVIGATION LINK IS CLICKED
    ===================================================== */

    const navigationLinks =
        navigation.querySelectorAll(".nav-link");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", (event) => {

        const clickedInsideNavigation =
            navigation.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideNavigation &&
            !clickedToggle &&
            navigation.classList.contains("open")
        ) {
            closeMenu();
        }

    });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navigation.classList.contains("open")
        ) {
            closeMenu();

            menuToggle.focus();
        }

    });


    /* =====================================================
       RESET WHEN RETURNING TO DESKTOP
    ===================================================== */

    const handleResize = () => {

        if (window.innerWidth > 760) {
            closeMenu();
        }

    };

    window.addEventListener(
        "resize",
        handleResize
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    closeMenu();

});