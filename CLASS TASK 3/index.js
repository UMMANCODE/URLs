function checkUsername() {
    let check = true
    const usernameInput = document.querySelector("#username")
    const usernameInputText = usernameInput.value

    if (usernameInputText.length < 3 || usernameInputText.length > 20)
        check = false
    return check
}

function checkAge() {
    let check = true
    const ageInput = document.querySelector("#age")
    const ageInputText = ageInput.value

    if (ageInputText < 16)
        check = false
    return check
}

const form = document.querySelector("form")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (checkAge() && checkUsername()) {
        const toastSuccessExample = document.getElementById('successToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastSuccessExample);
        toastBootstrap.show();
    } else {
        const toastErrorExample = document.getElementById('errorToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastErrorExample);
        toastBootstrap.show();
    }
});
