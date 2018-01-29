const foo = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
    console.log("decorator -- foo");
}

const log = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
    return {
        value: function( ... args: any[]) {
            console.log("Arguments: ", args.join(", "));
            const result = descriptor.value.apply(target, args);
            console.log("Result: ", result);
            return result;
        }
    }
}

class Pet {
    constructor(name: string, age: number) {}
    @foo
    bar() {
        console.log('bar');
    }

    @log
    barbar(foo:string) {
        console.log("barbar="+foo);
    }
}
 
let p = new Pet("Max", 12);
p.bar()
p.barbar('hi')


