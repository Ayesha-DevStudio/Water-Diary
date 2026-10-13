//TASKS AT HAND

//1. INITIALIZE THE COUNT WITH 0
//3. INCREMENT THE COUNT EACH TIME
//2. LISTEN EACH TIME INCREMENT BUTTON IS CLICKED
//4. SAVE THE COUNT IN count OF HTML
  
let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")

let count = 0;
    
function increment(){
    count += 1;
    countEL.textContent = count;
}

function save(){
    let entries = count + " - "
    saveEl.textContent += entries 
    count = 0
    countEL.textContent = 0
}

