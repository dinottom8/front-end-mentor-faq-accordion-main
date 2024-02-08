let accordion = document.querySelector(".accordion");
let add_accordion = document.querySelector(".add_accordion");
let form_accordion = document.querySelector(".form_accordion");
let modal_blackout = document.querySelector(".modal_blackout");
let submit_button = document.querySelector(".submit_button");
let form_values = [
    {
        "ask": "What is Frontend Mentor, and how will it help me?",
        "answer": "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },{
        "ask": "Is Frontend Mentor free?",
        "answer": "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },{
        "ask": "Can I use Frontend Mentor projects in my portfolio?",
        "answer": "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },{
        "ask": "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        "answer": "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
];
const open_buttons = []; 

function clearAccordion() {
    var accordion = document.querySelector(".accordion");
    
    while (accordion.firstChild) {
        accordion.removeChild(accordion.firstChild);
    }
}

function createAccordion() {
    form_values.forEach((el) => {
        const newEl = document.createElement("div");
        const newElTitle = document.createElement("div");
        const newElAns = document.createElement("div");
        newElAns.innerHTML = el.answer;
        const newElAsk = document.createElement("div");
        newElAsk.innerHTML = el.ask;
        const newElOpener = document.createElement("img");
        newElOpener.src = "assets/images/icon-plus.svg"
        newElOpener.classList.add("open-content");
        newElAsk.classList.add("ask");
        newEl.classList.add("item");
        newElTitle.classList.add("title");
        newElAns.classList.add("content");
    
        newElTitle.appendChild(newElAsk);
        newElTitle.appendChild(newElOpener);
        newEl.appendChild(newElTitle);
        newEl.appendChild(newElAns);
    
        accordion.appendChild(newEl);
    });

    var items = [...document.querySelectorAll(".item")];

    const open_buttons = [...document.querySelectorAll(".open-content")];
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
}
createAccordion();

add_accordion.addEventListener(("click"), () => {
    form_accordion.style.display = 'block';
    modal_blackout.style.display = 'block';
})

modal_blackout.addEventListener("click", () => {
    form_accordion.style.display = 'none';
    modal_blackout.style.display = 'none';
})

submit_button.addEventListener("click", () => {
    form_accordion.style.display = 'none';
    modal_blackout.style.display = 'none';
    form_values.push({
        "ask": document.querySelector("#form_question").value,
        "answer": document.querySelector("#form_answer").value
    })
    clearAccordion();
    createAccordion();
})