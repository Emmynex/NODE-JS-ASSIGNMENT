/*25. Util module
To access utility functions*/
var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6);
console.log(result);