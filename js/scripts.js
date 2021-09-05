(function () {
    const userArr = [];
    const submenu = document.querySelector(".submenu");

    userArr.push(
        document.querySelector(".main-header--user-menu > ul > li:first-child")
    );

    userArr.push(
        document.querySelector(".main-header--user-menu > ul > li:nth-child(2)")
    );
    console.log(userArr);

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
