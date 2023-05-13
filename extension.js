//VARIABLES
const buttonEl=document.getElementById('press')
const inputEl=document.getElementById('input-el')

//FUNCTIONS
function Pressed(){
    console.log("has been pressed")
}


buttonEl.addEventListener("click", Pressed())