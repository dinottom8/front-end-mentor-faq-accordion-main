let openButtons = [...document.querySelectorAll(".open-content")];

openButtons.forEach((el)=>{
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