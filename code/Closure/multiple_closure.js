/* 使用函数工厂的模式创建多个闭包 */
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
  }
  
  function makeHelpCallback(help) {
    return function() {
      showHelp(help);
    };
  }
  
  function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
      ];
  
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
  }
  
  setupHelp();

  /*使用匿名函数创建闭包*/

  function setupHelpAnonymous(){
    var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for(var i = 0; i < helpText.length; i++){
      var item = helpText[i];
      (function() {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
          showHelp(item.help);
        }
     })();
    }
  }

  setupHelpAnonymous()