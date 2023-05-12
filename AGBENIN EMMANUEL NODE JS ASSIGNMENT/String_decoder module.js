/*20. string_decoder module
To decode buffer objects into strings*/
var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var b = Buffer('abc');
console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer;
