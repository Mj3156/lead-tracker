let  myLeads = []

// selectors
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl=document.querySelector("#ul-el")
const delBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")



const  leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// access the tab from the chrome browser using chrome API 
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify( myLeads ))
    render(myLeads)  
        console.log(myLeads)
    })
})

// rendering  the list of all the tabs which are saved using this render function
function render(leads){
    let listItems =""
    for(let i=0 ; i < leads.length ; i++){
        listItems += `
            <li>
                <a target = '_blank' href='${leads[i]}'> ${ leads[i]} 
                </a>
            </li>`
    }
    ulEl.innerHTML= listItems
}

// delete button
delBtn.addEventListener("dblclick",function(){
   localStorage.clear()
    myLeads = []
   render(myLeads)
})

// input button function
inputBtn.addEventListener("click", function () {
    if (inputEl.value === "") {
        console.log("empty")
    } else {
        myLeads.push(inputEl.value)
    }
    inputEl.value= ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)
}) 


























// let hands = ["rock","paper","scissor"]
// function returnRandom(){
//     return hands[Math.floor(Math.random() * hands.length )]
// }
// console.log(returnRandom())








 // const prompt = require('prompt-sync')();
// let dayOfMonth = prompt("enter day:")
// let weekday = prompt("enter weekday:")

// if(dayOfMonth === 13 && weekday === "Friday"){
//     console.log("😱")
// }













// let largeCountires = ["Tuvalu", "India", "USA","Indonesia","Monaco"]


// largeCountires.shift()
// largeCountires.unshift("China")

// largeCountires.pop()
// largeCountires.push("Pakistan")

// console.log(largeCountires)




// console.log("The 5 largest countries in the world:")
// for(let i =0; i < largeCountires.length ; i++){
//     console.log("- " + largeCountires[i])
// }




// let age = prompt("enter your age:")

// if (age < 6){
//     console.log("Free")
// }
// else if(age >= 6 && age < 18)
// {
//     console.log("Child discount!!")

// }
// else if(age >= 18 && age < 27)
// {
//     console.log("Student discount!!")

// }
// else if(age >= 27 && age <= 66)
// {
//     console.log("Full price!!!")

// } else if(age > 66 && age < 120){
//     console.log("Senior citizen discount!!!")
// }else{
//     console.log("Please enter valid age under 120......")
// }

//___________________________________________________________________


// const person ={
//     name : "Mehul",
//     age : 20,
//     country : "India"
// }

// function logdata(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country + ".")
// }

// logdata()

// ----------------------------------------

// const castle = {
//     name : "San Guasto Abbey",
//     price  : 172,
//     isSuperhost  : true,
//     facilities  : ["2 bedrooms","2 beds", "2 baths "]
// }

// console.log(castle.facilities[1])
// console.log("$" + castle.price)