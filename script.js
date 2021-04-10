/* -------Activating sidebar--------- */
var sidebar = document.querySelector(".sidebarNotActive");
var burger = document.querySelector(".burger");

function changeSidebar(){
    sidebar.classList.toggle("sidebarNotActive");
    burger.classList.toggle("closeSidebar");
}