function addList() {
    // get parent element, which is ul
    let item = document.getElementById('myUL')
    // get the user input
    let input = document.getElementById('myInput').value
    // add the to do list
    item.innerHTML += ` <li>${input}</li> `

    input.value = ""
}

function completeList() {

}

function isCopmlete() {

}