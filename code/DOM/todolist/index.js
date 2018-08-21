/**
 * Define UI Elements */

const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

/**
 * Load all EventListeners
 */

loadEventListener()

function loadEventListener() {
  /** DOM loadEvent */
  document.addEventListener('DOMContentLoaded', getTasks)
  /** Add task event */
  form.addEventListener('submit', addTask)
  /** Remove task event */
  taskList.addEventListener('click', changeTaskState)

  /** Remove all tasks */
  clearBtn.addEventListener('click', removeTasks)
  /** filter tasks */
  filter.addEventListener('keyup', filterTasks)
}

/** Display tasks from local storage */
function getTasks() {
  const tasks = readLocalStorage()
  tasks.forEach(task => {
    taskList.appendChild(createTask(task.name, task.createTime))
  })
}

/** Add new task to local storage */
function addTask(e) {
  if (taskInput.value) {
    const time = new Date(Date.now()).toLocaleString()
    taskList.appendChild(createTask(taskInput.value, time))
    const task = {
      name: taskInput.value,
      createTime: time,
      state: 0
    }
    storeTask(task)
    taskInput.value = ''
    e.preventDefault()
  } else {
    e.preventDefault()
  }
}

/** Finish or delete task */
function changeTaskState(e) {
  console.log(e)
  if (e.target.parentElement.classList.contains('collection')) {
    if (e.target.classList.contains('finished')) {
      e.target.setAttribute('style', '')
      e.target.setAttribute('class', 'collection-item')
    } else {
      e.target.setAttribute(
        'style',
        'text-decoration: line-through; color: red'
      )
      e.target.setAttribute('class', 'collection-item finished')
    }
  }
  if (e.target.parentElement.classList.contains('delete-item')) {
    deleteTask(e.target.parentElement.parentElement, () => {
      e.target.parentElement.parentElement.remove()
    })
  }
}

/** Remove tasks */
function removeTasks() {
  /**
   * https://jsperf.com/innerhtml-vs-removechild/47
   * taskList.innerHtml = '' */

  /** Remove all the tasks */
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  localStorage.clear()
}

/** filter task by name */
function filterTasks(e) {
  const text = e.target.value.toLowerCase()
  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'None'
    }
  })
}

/** localStorage */

/** Store task  into localStorage */
function storeTask(task) {
  const tasks = readLocalStorage()
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
/** Remove task from localStorage */
function deleteTask(taskItem, callback) {
  const tasks = readLocalStorage()

  tasks.forEach((task, index) => {
    if (
      task.name === taskItem.childNodes[0].textContent &&
      task.createTime === taskItem.childNodes[2].textContent
    ) {
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
  callback.apply()
}
/** Return tasks from localStorage */
function readLocalStorage() {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  return tasks
}

function createTask(taskName, time) {
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskName))
  const br = document.createElement('br')
  li.appendChild(br)
  li.appendChild(document.createTextNode(`${time}`))
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'
  link.innerHTML = '<i class = "fa fa-remove"></i>'
  li.appendChild(link)
  return li
}
