(function () {

    const hiddenMenu = document.querySelector('.nav');
    
    const menuShow = document.querySelector('.header__menu').onclick = function () {
        hiddenMenu.style.height = "100%";
        
        const menuClose = document.querySelector('.nav__close-btn').onclick = function () {
            hiddenMenu.style.height = "0%";
        }
    };
})();