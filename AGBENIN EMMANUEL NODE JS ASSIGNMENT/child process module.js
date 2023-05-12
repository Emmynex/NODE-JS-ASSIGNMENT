/*3. Child process module
child_process	To run a child process*/
const exec = require('child_process').exec;  
exec('my.bat', (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  
