let formSelections = {}

function genderSelection(element) {
    formSelections["gender"] = element.innerText
    document.getElementById("gender").innerHTML = element.innerHTML
}