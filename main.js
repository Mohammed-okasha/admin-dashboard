// Access To Nav Btn
const navBtn = document.getElementById("nav-btn");
// // Access To Aside
const aside = document.getElementsByClassName("aside")[0];
// Access To Content Container
const contentContainer = document.getElementsByClassName("content-container")[0];

navBtn.addEventListener('click', () => {
    aside.classList.toggle("toggle-menu");

    contentContainer.classList.toggle("toggle-menu");
});


// Access to Close Btn
const closeBtn = document.getElementById("close");

closeBtn.onclick = _ => {
    aside.classList.remove("toggle-menu");
}