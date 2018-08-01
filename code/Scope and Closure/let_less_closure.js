/* 使用 let关键字可以避免产生过多的闭包 */
function showHelp(help) {
  document.getElementById('help').innerHTML = help
}

function setupHelp() {
  const helpText = [
    //eslint-disable-line
    { id: 'email', help: 'Your e-mail address' },
    { id: 'name', help: 'Your full name' },
    { id: 'age', help: 'Your age (you must be over 16)' }
  ]

  for (let i = 0; i < helpText.length; i += 1) {
    const item = helpText[i]
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help)
    }
  }
}

setupHelp()
