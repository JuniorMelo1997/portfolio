/* -------Activating sidebar--------- */
var sidebar = document.querySelector(".sidebarNotActive");
var burger = document.querySelector(".burger");

function changeSidebar(){
    sidebar.classList.toggle("sidebarNotActive");
    burger.classList.toggle("closeSidebar");
}


/* -------Projetos section--------- */

function changeCardInfoVisibility(i){
    document.querySelectorAll(".projetos .card .card-info")[i].classList.toggle("inactive");
}