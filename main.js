let header = document.querySelector(".header")
let closBtn = document.querySelector(`.nav-close`)
let openBtn = document.querySelector(`.nav-open`)

let navBtn = document.querySelectorAll(".nav-mobile-link li")
console.log(navBtn)

navBtn.forEach((e)=>{
    e.onclick = function(){
        header.classList.remove("open")
    }
})

openBtn.addEventListener("click",(e)=>{
    header.classList.add("open")
})
closBtn.addEventListener("click",(e)=>{
    header.classList.remove("open")
})