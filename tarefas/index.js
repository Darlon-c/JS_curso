

const inputTask = document.getElementById('inputTask')
const btn = document.getElementById('addBtn')
const task = document.getElementById('task')

function createLi() {
    const li = document.createElement('li')
    return li
}

inputTask.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
       if (!inputTask.value) return
        createTask(inputTask.value)
    }
})

function removeTask(li) {
    li.innerText += ' '
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Apagar'
    li.appendChild(btnDelete)
    btnDelete.setAttribute('class', 'apagar')
    
}

function resetInput() {
    inputTask.value = ''
    inputTask.focus()
}

function createTask(textInput) {
    const li = createLi()
    li.innerText = textInput
    task.appendChild(li)
    resetInput()
    removeTask(li)
    saveTask()
}

btn.addEventListener('click', function() {
    if (!inputTask.value) return
    createTask(inputTask.value)
})

document.addEventListener('click', function(e) {
    const el = e.target

    if(el.classList.contains('apagar')) {
        el.parentElement.remove()
        saveTask()
    }
})

function saveTask() {
    const liTask = task.querySelectorAll('li')
    const taskList = []

    for (let task of liTask) {
       let taskText = task.innerText
       taskText = taskText.replace('Apagar', '').trim()
       taskList.push(taskText)
    }

    const taskJSON = JSON.stringify(taskList)
    localStorage.setItem('task', taskJSON) 
}

function showTaskSave() {
    const task = localStorage.getItem('task')
    const newTaskList = JSON.parse(task)

    for (let task of newTaskList) {
        createTask(task)
    }
}

showTaskSave()
