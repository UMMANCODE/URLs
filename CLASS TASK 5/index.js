const usersBox = document.querySelector(".users-box")
const usersList = document.querySelector(".users")

let clickedUserId;

function fetchAndShowusers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            const li = document.createElement("li")
            li.style.cursor = "pointer"
            li.innerHTML = user.username
            li.setAttribute("data-id", user.id)
            usersList.appendChild(li)
        })
    })
}

document.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
        console.log(event.target)
        const  id = event.target.getAttribute("data-id")
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((user) => window.alert(user.id))

    }
})

fetchAndShowusers()