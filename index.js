import { loginInfo } from "./logInCredentials.js" // stores login for now. Will be a SQL database later
import { storeData } from "./storeData.js" // Just the store information

// console.log(loginInfo[0].name, loginInfo[0].passWord)


let driverName = document.getElementById("driver-name")
let driverPassword = document.getElementById("driver-password")
const storeName = document.getElementById("store-name")

// this function makes the store list for the driver to select. As this project progresses 
//      there will be a seperate login page so that more store information 
//      can be added without changing the code.

    function renderStoreList(){
        // you need a for each to make this better
        for (let i = 0; i < storeData.length; i++){
            let storeList = document.createElement("option")
            storeList.innerText = `${storeData[i].storeNumber} ${storeData[i].storeName}`
            storeName.appendChild(storeList)
        }
    }

    renderStoreList()

document.addEventListener("click", function(e){
    if (e.target.id === "submit-driver-login") {
        // This is a basic login to be replaced with a SQL database
        //      maybe use filter() ?
        if (driverName.value === loginInfo[0].name && driverPassword.value === loginInfo[0].passWord){
        document.getElementById("driver-login").style.display = "none"
        document.getElementById("departure-info-section").style.display = "flex"
        // change the driver's logged in info in logincredentials
        // add a pop up that diplays any road problems
    }
    } else if (e.target.id === "submit-store-info"){
        document.getElementById("departure-varification").style.display = "flex"
        document.getElementById("store-info").style.display = "none"
    } else if (e.target.id === "yes-depart-btn") {
        document.getElementById("depart-time").style.display = "flex"
        document.getElementById("id-verification").style.display = "none"
    } else if (e.target.id === "submit-time") {
        document.getElementById("departed-section").style.display = "flex"
        document.getElementById("departure-info-section").style.display = "none"
    }
})
