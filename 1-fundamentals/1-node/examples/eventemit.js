const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (stuff) => {
  console.log('an event occurred!');
  console.log(stuff);
});
myEmitter.emit('event', {some:"data"});