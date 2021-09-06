(function () {
    /** User menu in header */
    const userArr = [];
    const submenu = document.querySelector(".submenu");

    userArr.push(
        document.querySelector(".main-header--user-menu > ul > li:first-child")
    );

    userArr.push(
        document.querySelector(".main-header--user-menu > ul > li:nth-child(2)")
    );

    userArr[1].addEventListener("click", function () {
        userArr[0].classList.toggle("user-menu-active");
        userArr[1].classList.toggle("user-menu-active");

        if (userArr[0].classList.contains("user-menu-active")) {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }
    });
})();

(function () {
    // search main-nav
    const navSearchBtn = document.querySelector(".nav-search");
    const mainNav = document.querySelector(".main-nav");
    const mainNavSearchForm = document.querySelector(".main-nav--search-form");
    const mainNavSubmenu = document.querySelector(".submenu");

    navSearchBtn.addEventListener("click", function () {
        console.log("click");
        if (mainNav.style.display == "flex") {
            mainNav.style.display = "none";
            mainNavSearchForm.style.display = "flex";
        } else {
            mainNav.style.display = "flex";
            mainNavSearchForm.style.display = "none";
        }
    });
})();

(function () {
    // toggle main-nav
    const bars = document.querySelector(".submenu .fa-bars");
    const navSubmenu = document.querySelector("section.nav-submenu");
    bars.addEventListener("click", function () {
        navSubmenu.classList.toggle("submenu-active");
    });
})();
