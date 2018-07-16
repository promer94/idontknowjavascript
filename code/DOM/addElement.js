// Add elements
const li = document.createElement('li')
const link = document.createElement('a')

link.className = 'collection'
link.innerHTML = "<i class = 'lal'></i>"

li.className = 'collection'
li.id = 'id'

li.setAttribute('title', 'New item')
li.appendChild(document.createTextNode('Hello'))

document.querySelector('ul').appendChild(li)
