/* 使用函数工厂的模式创建多个闭包 */
function showHelp(help) {
  document.getElementById('help').innerHTML = help
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help)
  }
}

function setupHelp() {
  const helpText = [
    { id: 'email', help: 'Your e-mail address' },
    { id: 'name', help: 'Your full name' },
    { id: 'age', help: 'Your age (you must be over 16)' }
  ]

  for (let i = 0; i < helpText.length; i += 1) {
    var item = helpText[i] // eslint-disable-line
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help)
  }
}

setupHelp()

/*使用匿名函数创建闭包*/

function setupHelpAnonymous() {
  const helpText = [
    { id: 'email', help: 'Your e-mail address' },
    { id: 'name', help: 'Your full name' },
    { id: 'age', help: 'Your age (you must be over 16)' }
  ]

  for (var i = 0; i < helpText.length; i++) {
    // eslint-disable-line
    ;(function() {
      // eslint-disable-line
      var item = helpText[i] // eslint-disable-line
      document.getElementById(item.id).onfocus = function() {
        // eslint-disable-line
        showHelp(item.help) // eslint-disable-line
      }
    })()
  }
}

setupHelpAnonymous()
