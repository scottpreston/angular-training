const pingPongClass = require('./pingpong');
const pingPong = new pingPongClass();

setInterval(() => {
    pingPong.ping();
}, 1000);