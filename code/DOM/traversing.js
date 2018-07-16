let val

const list = document.querySelector('ul')
const listItem = document.querySelector('li:first-child')

/** Get child node */
val = list
val = listItem

val = list.childNodes
val = list.childNodes[0].nodeName
val = list.childNodes[0].nodeType
val = list.childNodes[0].nodeValue

/** Get children element nodes */
val = list.children
val = list.children[0].firstChild
val = list.firstChild
val = list.firstElementChild

/** Get parent node */
val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement

/** Get next sibling */
val = list.nextSibling
val = list.nextElementSibling

/** Get prev sibling */
val = list.previousSibling
val = list.previousElementSibling
