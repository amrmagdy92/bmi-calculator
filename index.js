let formSelections = {}

function genderSelection(element) {
    formSelections["gender"] = element.innerText.toLowerCase()
    document.getElementById("gender").innerHTML = element.innerHTML
}

function unitSelection(element) {
    formSelections["unit"] = element.innerText.toLowerCase()
    document.getElementById("unit").innerHTML = element.innerHTML
}