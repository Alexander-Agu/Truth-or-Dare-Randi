let canvi = document.querySelector(".container");
let secCanvi = document.querySelector(".sec-container");

canvi.addEventListener('click', ()=>{
    let num = 0;
    num++;

    const para = document.createElement("P");
    const node = document.createTextNode("This is a paragraph.");
    
    para.appendChild(node);
    canvi.appendChild(para);
})