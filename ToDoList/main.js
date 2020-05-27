function addList() {
    // get parent element, which is ul
    let item = document.getElementById('myUL')
    // get the user input
    let input = document.getElementById('myInput')
    // add the to do list
    item.innerHTML += `<li>${input.value}</li> `
    input.value = ""

    // attach all the to do list li with addEventListener
    for (let oneList of item.children) {

        oneList.addEventListener('click', () => {
            oneList.classList.add('checked')
        })
    }
}


function isCopmlete() {

}