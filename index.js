let units
let heightText = document.getElementById("height-label").innerText
let weightText = document.getElementById("weight-label").innerText

function unitSelection(element) {
    if (element.innerText.toLowerCase() === "metric") {
        document.getElementById("height-label").innerText = `${heightText} (cm)`
        document.getElementById("weight-label").innerText = `${weightText} (kg)`
    } else if (element.innerText.toLowerCase() == "imperial") {
        document.getElementById("height-label").innerText = `${heightText} (in)`
        document.getElementById("weight-label").innerText = `${weightText} (lb)`
    }
    units = element.innerText.toLowerCase()
    document.getElementById("unit").innerHTML = element.innerHTML
}