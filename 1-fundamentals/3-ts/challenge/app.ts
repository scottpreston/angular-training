import {PingPong} from './pingpong'

const pingPong = new PingPong();

setInterval(() => {
    pingPong.ping();
}, 1000);