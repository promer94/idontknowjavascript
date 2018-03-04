// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

const list = document.querySelector('ul');
console.log(list.children);

const icon = document.createElement('i');
icon.className = 'fa fa-remove';

const deleteIcon = document.createElement('a');
deleteIcon.className = 'delete-item secondary-content';
deleteIcon.href = '#';
deleteIcon.appendChild(icon);

const listItem = document.createElement('li');
listItem.className = 'collection-item';
listItem.id = 'id';
listItem.setAttribute('title', 'New');
listItem.appendChild(document.createTextNode('Hello'));
listItem.appendChild(deleteIcon);

list.appendChild(listItem);
