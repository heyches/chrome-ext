let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("delete button clicked")
    localStorage.clear()
    myLeads = []
    renderLeads()
})
    
// STORE STRINGS LOCALLY VIA "localStorage.setItem(KEY,VALUE)"
console.log(localStorage.getItem("myLeads"))

// Parse into an array
console.log(leadsFromLocalStorage)


inputBtn.addEventListener("click", function() {
    console.log("input button clicked")
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + "</a></li>"
    
        // ALTERNATE WAY TO INSERT HTML CODE 
        // 1. Create the element, e.g. "li"
        // const li = document.createElement("li")
        // 2. Set text content, e.g. myLeads[i]
        // li.textContent = myLeads[i]
        // 3. append to ulEl
        // ulEl.append(li)
    }   
    ulEl.innerHTML = listItems
}

