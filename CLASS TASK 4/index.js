function createNewInput() {
    const newInput = document.createElement("input")
    const inputsDiv = document.querySelector(".inputs")
    newInput.setAttribute("type", "text")
    newInput.classList.add("input")
    newInput.setAttribute("placeholder", `Fullname ${getInputsCount() + 1}`)
    inputsDiv.appendChild(newInput)
}

function getInputsCount() {
    return document.querySelectorAll("input").length
}

function getAllInputValues() {
    let inputs = Array.from(document.getElementsByClassName("input"));
    let values = [];
    inputs.forEach((elem) => values.push(elem.value));
    return values;
}

function doSubmit(e) {
    e.preventDefault()
    document.querySelector("ul").style.display = "block";
    if (checkInputField()) {
        showToast()
        return
    }
    let liItems = Array.from(document.querySelectorAll("li"))
    liItems.map((elem) => elem.remove())
    const ul = document.querySelector("ul")
    getAllInputValues().forEach((elem, index) => {
       ul.appendChild(generateLi(elem, index))
    })
}

function generateLi(value, idx) {
    const item = document.createElement("LI")
    item.innerHTML = (idx + 1) + ". " + value
    return item
}

function checkInputField() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll('input[type="text"]');
    const lastInput = inputs[inputs.length - 1];

    return lastInput.value.trim() === '';
}

function showToast() {
    const toastLiveExample = document.getElementsByClassName('toast')[0]
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()

}

document.getElementById("add").addEventListener("click", createNewInput)
document.getElementById("submit").addEventListener("click", doSubmit)