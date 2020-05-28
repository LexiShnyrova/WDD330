class ToDoList {
    // property
    taskList = []
    listStatus = 'all'
    nextId = 1
    parent = document.getElementById('myUL')
    myInput = document.getElementById('myInput')

    // constructor
    constructor() {
        this.toggleTask = this.toggleTask.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        this.load()
        this.render()
        // addEventListener to add button
        let addBtn = document.getElementsByClassName('addBtn')[0]
        addBtn.addEventListener('click', () => {
            this.addItem()
        })

        // addEventListener to all button
        let all = document.getElementById('all')
        all.addEventListener('click', () => {
            this.listStatus = 'all'
            this.render()
        })

        // addEventListener to incomplete button
        let incomplete = document.getElementById('incomplete')
        incomplete.addEventListener('click', () => {
            this.listStatus = 'incomplete'
            this.render()
        })

        // addEventListener to complete button
        let complete = document.getElementById('complete')
        complete.addEventListener('click', () => {
            this.listStatus = 'complete'
            this.render()
        })
    }

    // methods
    toggleTask(e) {
        let task = e.target
        const taskToModify = this.taskList.find(arrayTask => arrayTask.id == task.id)
        console.log(task.id)
        taskToModify.isComplete = !taskToModify.isComplete

        // if (taskToModify.isComplete == true) 
        //     taskToModify.isComplete = false
        // else
        //     taskToModify.isComplete = true
        this.render()
        this.save()
    }

    render() {
        // use listStatus to decide which function to call (showAll, showComplete, showIncomplete)
        if (this.listStatus == 'all')
            this.showAll()
        else if (this.listStatus == 'incomplete')
            this.showIncomplete()
        else if (this.listStatus == 'complete')
            this.showComplete()
    }
    save() {
        localStorage.setItem('taskList', JSON.stringify(this.taskList))
        localStorage.setItem('nextId', this.nextId)
    }
    load() {
        let storeList = localStorage.getItem('taskList')
        if (storeList)
            this.taskList = JSON.parse(storeList)

        let storeId = localStorage.getItem('nextId')
        if (storeId)
            this.nextId = parseInt(storeId)
    }

    addItem() {
        // declare an object first that contains task and isComplet
        // let myObject = {
        //     content: this.myInput.value,
        //     isComplete: false
        // }
        // push is into taskList
        // this.taskList.push(myObject)

        // Declare an object and passing as an arguement, then push it into taskList
        this.taskList.push({ content: this.myInput.value, isComplete: false, id: this.nextId++ })

        // show all the tasks
        this.render()

        // remove the input field
        this.myInput.value = ''
        this.save()
    }

    showAll() {
        // Need to clear all li inside parent
        this.parent.innerHTML = ''
        for (let task of this.taskList) {
            // create li element
            let myLi = document.createElement('li')
            // create delete icon 
            let close = document.createElement('span')
            // add a class to delete icon
            close.classList.add('close')
            close.innerHTML = '\u00D7'
            // addEventListener to delete icon
            close.addEventListener('click', this.deleteItem)
            myLi.addEventListener('click', this.toggleTask)
            // assign the stored task to myLi
            myLi.innerHTML = task.content
            myLi.append(close)
            // add id to the task
            myLi.setAttribute('id', task.id)
            // have a check mark if it is complete
            if (task.isComplete == true)
                myLi.classList.add('checked')
            // dispay inside parent element
            this.parent.append(myLi)
        }
    }

    showIncomplete() {
        this.parent.innerHTML = ''
        for (let task of this.taskList) {
            if (task.isComplete == false) {
                // create task
                let myLi = document.createElement('li')
                // create delete icon 
                let close = document.createElement('span')
                // add a class to delete icon
                close.classList.add('close')
                close.innerHTML = '\u00D7'
                // addEventListener to delete icon
                close.addEventListener('click', this.deleteItem)
                // assign user input into li
                myLi.innerHTML = task.content
                // add delete icon to li
                myLi.append(close)
                // can toggle the task
                myLi.addEventListener('click', this.toggleTask)
                myLi.setAttribute('id', task.id)
                this.parent.append(myLi)
            }
        }
    }

    showComplete() {
        this.parent.innerHTML = ''
        for (let task of this.taskList) {
            if (task.isComplete == true) {
                let myLi = document.createElement('li')
                // create delete icon 
                let close = document.createElement('span')
                // add a class to delete icon
                close.classList.add('close')
                close.innerHTML = '\u00D7'
                // addEventListener to delete icon
                close.addEventListener('click', this.deleteItem)
                myLi.addEventListener('click', this.toggleTask)
                myLi.innerHTML = task.content
                myLi.append(close)
                myLi.setAttribute('id', task.id)
                myLi.classList.add('checked')
                this.parent.append(myLi)
            }
        }
    }

    deleteItem(e) {
        e.stopPropagation()
        let deleteTask = e.target.parentElement
        console.log(deleteTask)
        this.taskList = this.taskList.filter(arrayTask => arrayTask.id != deleteTask.id)
        this.render()
        this.save()
    }
}

let myTodo = new ToDoList()


