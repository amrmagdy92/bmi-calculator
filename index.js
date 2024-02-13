let formSelections = {}

function genderSelection(element) {
    formSelections["gender"] = element.innerText
    document.getElementById("gender").innerHTML = element.innerHTML
}

function unitSelection(element) {
    formSelections["unit"] = element.innerText
    document.getElementById("unit").innerHTML = element.innerHTML
}