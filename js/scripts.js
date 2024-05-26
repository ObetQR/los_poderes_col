let mainNavMenu = document.getElementById("main-nav__menu")
mainNavMenu.style.maxHeight = "0px";

function toggleMenu(){
    if(mainNavMenu.style.maxHeight == "0px")
    {
        mainNavMenu.style.maxHeight = "300px";
    }
    else {
        mainNavMenu.style.maxHeight = "0px";
    }
}