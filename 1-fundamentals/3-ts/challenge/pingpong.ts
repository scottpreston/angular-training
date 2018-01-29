interface IPingPong {
    ping();
}

export class PingPong implements IPingPong {
    private i: number;
    constructor() {
        this.i = 0;
    }
    ping() {
        this.i++;
        console.log(this.i);
    }
}

