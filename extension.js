//ARRAY OF DATA
let myLeads=[]
//document.getElementById('hide-btn').style.visibility = 'hidden'
let ishidden=true
//VARIABLES
const buttonEl=document.getElementById('press')
const inputEl=document.getElementById('input-el')
let showEl=document.getElementById("show-btn")
let ulEl=document.getElementById('ul-el')
let leadsFromLocalStorage=JSON.parse(localStorage.getItem('myLeads'))
let delBtn=document.getElementById('del-btn')

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    console.log(myLeads)
}

//FUNCTIONS
function Pressed(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    // MAKING myLeads A STRING TO SAVE IN LOCAL STORAGE
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))

}

buttonEl.addEventListener("click", Pressed)

function Show(){
ulEl.textContent=''
for(let i=0; i<myLeads.length; i++){

    ulEl.innerHTML+=`<li> 
    <a target='_blank' href=${myLeads[i]}> ${myLeads[i]}
    </a>
    </li>`
    showEl.textContent="Hide Sites"
    showEl.removeEventListener('click', Show)
    showEl.addEventListener("click", hide)
    ishidden=false
}
}
 function hide(){
    ulEl.textContent=''
    showEl.textContent="Show Sites"    
    showEl.removeEventListener('click',hide)
    showEl.addEventListener("click", Show)
    ishidden=true

 }

 showEl.addEventListener('click', function (){
    if(ishidden){
        Show ()
    }
    else{
        hide()
    }
 })

 function Delete() {
    ulEl.textContent=""
    localStorage.clear()
 }

delBtn.addEventListener("click", Delete)