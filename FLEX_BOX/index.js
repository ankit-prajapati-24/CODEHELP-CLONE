// const navbar_btn = document.querySelector(".mobile_navr-btn");
// const header_nav = document.querySelector(".header");
// let toggel_navbar = document.querySelector(".small-navbar-head");
// const toggelnavr = ()=>{
//       if(toggel_navbar.sytle.display != 'none'){
//             toggel_navbar.sytle.display = 'none';
//       }
//       else {
//             toggel_navbar.sytle.display = 'flex';
//       }
//       // header_nav.classList.toggle("active");
// }
// navbar_btn.addEventListener("click",()=> toggelnavr());

// // navbar_btn.addEventListener("click",()=> toggelnavr());

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

