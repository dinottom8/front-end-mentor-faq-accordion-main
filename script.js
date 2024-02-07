let open_buttons = [...document.querySelectorAll(".open-content")];
let add_accordion = document.querySelector(".add_accordion");
let form_accordion = document.querySelector(".form_accordion");
let modal_blackout = document.querySelector(".modal_blackout")

open_buttons.forEach((el)=>{
    el.addEventListener("click", ()=>{
        let contentEl = el.parentElement.nextElementSibling;
        if(contentEl.classList.contains("active")){
            contentEl.classList.remove("active");
            el.src = '../assets/images/icon-plus.svg'
        }else{
            el.src = '../assets/images/icon-minus.svg'
            contentEl.classList.add("active");
        }
    });
});

add_accordion.addEventListener(("click"), () => {
    form_accordion.style.display = 'block';
    modal_blackout.style.display = 'block';
})