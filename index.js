import { loginInfo } from "./logInCredentials.js" // stores login for now. Will be a SQL database later
import { storeData } from "./storeData.js" // Just the store information

// Elements from the HTML

    const driverName = document.getElementById("driver-name") // this is the name input from the login page
    const driverPassword = document.getElementById("driver-password")// this is the PW input from the login page 
    const storeName = document.getElementById("store-name") // this is the drop down menu for store list
    const sealNumber = document.getElementById("seal-number") // this is the seal number input
    const signatureVerification = document.getElementById("signature-verification") // this is the separt signature
    const departedSection = document.getElementById("departed-section") // for now this shows the log of 1 route

let driverLogForm = []

// routeInfo still needs time arrive, and time back *******************

let routeInfo = {}
const d = new Date().toLocaleTimeString() // this is the current time

// This event listener section controls the displays of the different sections and the
//      sets the following funcitons into motion

        // FOR ALL BELOW: ************************************************************

            // you need to seperate things into their own function to clean up

    document.addEventListener("click", function(e){
        if (e.target.id === "submit-driver-login") {
            // This is a basic login to be replaced with a SQL database
            if (driverName.value === loginInfo[0].name && driverPassword.value === loginInfo[0].passWord){
                document.getElementById("driver-login").style.display = "none"
                document.getElementById("departure-info-section").style.display = "flex"
                logInDriver(driverName)
            } // else if.... please try again ************************************************
        } 
        // This submits the store information to the driver log
        else if (e.target.id === "submit-store-info"){
            // add a pop up that diplays any road problems ************************************
            document.getElementById("departure-varification").style.display = "flex"
            document.getElementById("store-info").style.display = "none"
            
            // seperate into it's own funciton ******************************************* 
            
            routeInfo["store"] = storeName.value 
            routeInfo["seal"] = sealNumber.value
        } 
        // This submits the departure signature info to the driver log
        else if (e.target.id === "yes-depart-btn") {
            document.getElementById("depart-time").style.display = "flex"
            document.getElementById("id-verification").style.display = "none"
        } 
        // This submits the time to the driver's log
        else if (e.target.id === "submit-time") {
            document.getElementById("depart-time").style.display = "none"
            document.getElementById("store-arival").style.display = "flex"
            
            // Make function ********************************************************
            
            routeInfo["depart"] = d
            routeInfo["signature"] = signatureVerification.value
        }
        // This submits the time driver arived at store
        else if (e.target.id === "arival-conformation-btn"){
            document.getElementById("store-arival").style.display = "none"
            document.getElementById("store-depart").style.display = "flex"
            
            routeInfo["storeArival"] = d
        }
        // This submits time driver left store
        else if (e.target.id === "store-depart-btn"){
            document.getElementById("store-depart").style.display = "none"
            document.getElementById("return-arival").style.display = "flex"

            routeInfo["storeDepart"] = d
        }
        // this submits the time the driver returned to the yard
        else if (e.target.id === "yard-arival-btn"){
            document.getElementById("return-arival").style.display = "none"
            document.getElementById("departed-section").style.display = "flex"

            routeInfo["yardArival"] = d
            createDriverLog()
        }
    })

// **********FUNCTIONS********** 

    // this function makes the store list for the driver to select. As this project progresses 
    //      there will be a seperate login page so that more store information 
    //      can be added without changing the code.
        function renderStoreList(){
            // you need a for each to make this better ***********************************
            for (let i = 0; i < storeData.length; i++){
                let storeList = document.createElement("option")
                storeList.innerText = `${storeData[i].storeNumber} ${storeData[i].storeName}`
                storeName.appendChild(storeList)
            }
        }

        renderStoreList()

    // This function now changes the logged in driver isLogedIn to true. 
    //      When isLogedIn is true it allows all other info to be gathered into
    //      the driver's log.
        function logInDriver(names){
            let driverLoggedIn = loginInfo.filter(function(info){
                return info.name === names.value
            })
            driverLoggedIn[0].isLogedIn = true
            routeInfo["name"] = driverLoggedIn[0].name
        }

function createDriverLog(){
    departedSection.innerHTML = 
    `
        <h2>${routeInfo.name}'s daily log</h2>
        <p>Store: ${routeInfo.store}</p>
        <p>Seal number: ${routeInfo.seal}</p>
        <p>Time depart: ${routeInfo.depart}</p>
        <p>Sealed by: ${routeInfo.signature}</p>
        <p>Store arival: ${routeInfo.storeArival}</p>
        <p>Store depart: ${routeInfo.storeDepart}</p>
        <p>MGI arival: ${routeInfo.yardArival}</p> 
    `
    driverLogForm.push(routeInfo)
    console.log(driverLogForm)
}

// Next step:
//  -make it so driver has to enter info needed
//  -pull info from drivers log instead of route info
//  -make the problems pop up section











// Don't need this for now but might be usefull ***********************

// function createDriverLogForm(){
//     // This works for creating an object in the array. now figure out the order needed.

//     driverLogForm.push({"store": storeData[0].storeName})
// }


