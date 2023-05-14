//ARRAY OF DATA
let myLeads=[]

//VARIABLES
const buttonEl=document.getElementById('press')
const inputEl=document.getElementById('input-el')
const showEl=document.getElementById("show-btn")
let ulEl=document.getElementById('ul-el')

//FUNCTIONS
function Pressed(){
    myLeads.push(inputEl.value)
    inputEl.value=''

}

buttonEl.addEventListener("click", Pressed)
function Show(){
for(let i=0; i<myLeads.length; i++){
    ulEl.innerHTML+="<li> "+ myLeads[i]+"</li>"
}
}

showEl.addEventListener("click", Show)