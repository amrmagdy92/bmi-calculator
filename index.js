let units
let heightText = document.getElementById("height-label").innerText
let weightText = document.getElementById("weight-label").innerText
let resultText = document.getElementById("bmi-result").innerText

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

function calculateBMI() {
    let height = document.getElementById("height-input").value
    let weight = document.getElementById("weight-input").value

    if (!height > 0) {
        alert("Please provide valid height")
    } else if (!weight > 0) {
        alert("Please provide valid weight")
    } else {
        if (units === "metric") {
            document.getElementById("bmi-result").innerText = `${resultText} ${((weight / (height * height)) * 10000).toFixed(2)}`
        } else if (units === "imperial") {
            document.getElementById("bmi-result").innerText = `${resultText} ${(703 * (weight / (height * height))).toFixed(2)}`
        } else {
            alert("Please check the units section before clicking submit.")
        }
    }
}