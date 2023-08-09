
const navbar_btn = document.querySelector(".mobile_navr-btn");
const header_nav = document.querySelector(".header");
let toggle_navbar = document.querySelector(".small-navbar-head");

const toggleNav = () => {
    if (toggle_navbar.style.display != 'flex') {
        toggle_navbar.style.display = 'flex';
      //   toggle_navbar.style.position = 'static';
        
    } else {
        toggle_navbar.style.display = 'none';
    }
    header_nav.classList.toggle("active");
}

navbar_btn.addEventListener("click", toggleNav);

