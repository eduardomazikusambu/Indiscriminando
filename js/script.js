const navToggle = document.querySelector(".nav-menu_toggle"),
      navMenu = document.querySelector(".nav_menu"),navClose = document.querySelector(".nav-menu_close"),

if(navToggle){
    navToggle.addEventlistener("click",() => { navMenu.classlist.add("show-menu")})
}
if(navClose){
    navClose.addEventlistener("click",() => { navMenu.classlist.remove("show-menu")})
}