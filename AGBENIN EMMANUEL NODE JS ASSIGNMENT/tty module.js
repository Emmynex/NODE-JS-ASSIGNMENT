/*23. tty module
Provides classes used by a text terminal*/
var tty = require('tty');  
process.stdin.setRawMode(true);  
process.stdin.resume();  
 console.log('I am leaving now');  
process.stdin.on('keypress', function(char, key) {  
  if (key && key.ctrl && key.name == 'c') {  
     
    process.exit()  
  }  
});  