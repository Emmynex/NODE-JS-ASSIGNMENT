/*9. Events module
To handle events*/
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream')