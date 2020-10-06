
function changeTitle() {
  let title = document.getElementById("header-title")
  title.innerText = "Hello there"

}

changeTitle()


function changeTitleStyle() {
  let title = document.querySelector("h2.title")
  title.style.color = "blue"
  title.style.margin = "5rem"

}

changeTitleStyle()


function addItemsToList(content) {
  let list = document.querySelector("ul.list-group")
  let newItem = document.createElement("li")
  newItem.innerText = "I'm new"
  newItem.className = "list-group-item"
  list.appendChild(newItem)

}

addItemsToList()


function logEachListItem() {
  let items = document.querySelectorAll("li.list-group-item")
  items.forEach(el => console.log(el.innerText))
    
}

logEachListItem()


function colorEachListItem () {
  let items = document.querySelectorAll("li.list-group-item")
  items.forEach(el => el.style.color = "green")
}

colorEachListItem()


function changeBackgroundColor() {
  document.body.style.backgroundColor = "green"
}

function createButton () {
  let button = document.createElement("button")
  let list = document.querySelector("ul#items")
  list.appendChild(button).style.margin = "1rem"
  button.innerText = "Change Background"
  button.addEventListener("click", changeBackgroundColor)
}

createButton()