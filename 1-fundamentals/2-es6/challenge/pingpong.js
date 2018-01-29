class PingPong {
    constructor() {
        this.i = 0;
    }
    ping() {
        this.i++;
        console.log(this.i);
    }
}

module.exports = PingPong;