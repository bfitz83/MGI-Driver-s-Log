import { loginInfo } from "./logInCredentials.js"
import { storeData } from "./storeData.js"

console.log(loginInfo)
console.log(storeData)

document.addEventListener("click", function(e){
    if (e.target.id === "submit-store-info"){
        document.getElementById("departure-varification").style.display = "flex"
    } else if (e.target.id === "submit-id-verification") {
        document.getElementById("depart-time").style.display = "flex"
    } else if (e.target.id === "submit-time") {
        document.getElementById("departed-section").style.display = "flex"
    }
})
