function addList() {
    //     // get parent element, which is ul
    //     let item = document.getElementById('myUL')
    //     // get the user input
    //     let input = document.getElementById('myInput')
    //     // add the to do list
    //     item.innerHTML += `<li>${input.value}</li>`
    //     input.value = ""

    //     // attach all the to do list li with addEventListener
    //     for (let oneLi of item.children) {

    //         oneLi.addEventListener('click', () => {

    //             oneLi.classList.add('checked')
    //         })
    //     }
    // }

    let parent = document.getElementById('myUL')
    let liItem = document.createElement('li')
    let input = document.getElementById('myInput')
    liItem.innerHTML += `<li>${input.value}</li>`
    parent.append(liItem)

    function isCopmlete() {
        let item = document.getElementById('myUL')

    }