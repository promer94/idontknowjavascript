/* document.getElementById */
let taskTitle = document.getElementById('task-title');

/** Get things from the element */
taskTitle.id;
taskTitle.className;

/** Change styling */
taskTitle.style.background = '#333';
taskTitle.style.display = 'none';

/** Change content */
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My task';
taskTitle.innerHTML = '<span>hello</span>';


/** document.querySelector */

document.querySelector('#task')  // Selector by id;
document.querySelector('.card-title') // Selector by className;

/** Single selector  */
document.querySelector('ui').style.color = 'red'
document.querySelector('ul li').style.color = 'blue'
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child()').style.color = 'red';
document.querySelector('li:nth-child(odd)').style.color = 'red';  // Only first odd element will change.


/** multiple selector */
document.querySelectorAll(); // Return NodeList; it is an Array  forEach works;

document.getElementsByClassName(); // Return elements collection.

let item = document.getElementsByClassName();
item[0].style.color = 'red';


let listItems = document.querySelector('ul').getElementsByClassName('collection');