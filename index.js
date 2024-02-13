let units

function unitSelection(element) {
    units = element.innerText.toLowerCase()
    document.getElementById("unit").innerHTML = element.innerHTML
}