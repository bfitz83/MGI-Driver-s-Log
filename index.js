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
        if (driverName.value === loginInfo[0].name && driverPassword.value === loginInfo[0].passWord){
            document.getElementById("driver-login").style.display = "none"
            document.getElementById("departure-info-section").style.display = "flex"
            logInDriver(driverName)
        }
    } else if (e.target.id === "submit-store-info"){
        // add a pop up that diplays any road problems
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

// This function now changes the logged in driver isLogedIn to true. 

    function logInDriver(names){
        console.log(names.value)
        let driverLoggedIn = loginInfo.filter(function(info){
            return info.name === names.value
        })
        driverLoggedIn[0].isLogedIn = true
        console.log(driverLoggedIn)
    }

// Next steps: use isLogedIn to start the log report and change the code above to check over the array for who is logging in
