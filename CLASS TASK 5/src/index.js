const todoBox = document.getElementById("todo-box")
const doneBox = document.getElementById("done-box")

const todoList = document.getElementById("todo")
const doneList = document.getElementById("done")

const todoListItems = Array.from(todoList.children)
const doneListItems = Array.from(doneList.children)

todoListItems.forEach((elem, index) => {elem.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("index", index)
})})

doneBox.addEventListener("dragover", function(event) {
    event.preventDefault()
})

doneBox.addEventListener("drop", function(event) {
    const index = event.dataTransfer.getData("index")
    const element = todoListItems[index]
    doneList.appendChild(element)
})
