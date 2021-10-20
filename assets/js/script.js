const dropdownHead = document.querySelector(".dropdown_head");
const dropdownMenu = document.querySelector(".dropdown_menu");

dropdownHead.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("show");
});