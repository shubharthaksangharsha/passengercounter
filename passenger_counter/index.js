let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-btn")
let count = 0
function increment(){
    count += 1
    countEl.textContent = count
   
}

function save(){
    let showCount = count + " - "
    saveEl.textContent += showCount
    countEl.textContent = 0
    count = 0
}

function reset(){
    saveEl.textContent = "Previous entires: ";
    count = 0;
    countEl.textContent = 0
}
