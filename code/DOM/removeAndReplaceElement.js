const newHeading = document.createElement('h2');

newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Task List'));

/** Get the old heading */
const oldHeading = document.getElementById('task title');

/** parent */
const cardAction = document.querySelector('.card-action');

/** Replace */
cardAction.replaceChild(newHeading, oldHeading);

/** Remove element */
const list = document.querySelectorAll('li');
list[0].remove;

const listCollection = document.querySelector('ul');
listCollection.removeChild(list[3]);

/** Classes & ATTR */
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

/** Classes */
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

/** Attributes */
val = link.getAttribute('href');
val = link.setAttribute('href');
link.removeAttribute('href');
