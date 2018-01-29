class Foo {
    bar: string;
    getStuff() {
        return 123;
    }
    getBar() {
        return this.bar;
    }
}

const f = new Foo();
f.bar = "hi there";
console.log(f.getStuff());
console.log(f.getBar());


