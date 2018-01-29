## TypeScript

First install it

`npm install -g typescript`

To run via node:

`npm install -g ts-node`

My first TS file:

```typescript
function hello(person: string) {
    return "Hello, " + person;
}

console.log(hello('Scott'));
```

Note the syntax `variableName` : `type`.

Compiled output:

```javascript
function hello(person) {
    return "Hello, " + person;
}
console.log(hello('Scott'));
```

### TypeScript Types

[Official Docs - Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

```typescript
//boolean
let isDone: boolean = false;

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let color: string = "blue";

//array
let list: number[] = [1, 2, 3];

// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

//enum
enum Color {Red, Green, Blue}

// any
let notSure: any = 4;
```

### Interfaces

[Official Docs - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

Just like in Java or C#.

```typescript
interface Point {
    x: number;
    y: number;
}

let p1: Point = { x: 10, y: 20 };

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

```

### Classes

[Official Docs - Classes](https://www.typescriptlang.org/docs/handbook/classes.html)

Types matter but you don't need to specify a return type on functions.

```typescript
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
```

### Enums

[Official Docs - Classes](https://www.typescriptlang.org/docs/handbook/enums.html)

```typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
```

### TSConfig.json

[Offical Docs - tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

This is the configuration file for the typescript compiler or `tsc`. 

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "target": "es6",
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "include": [
        "ts/*"
    ]
}
```

### Decorators ###

[Official Docs - Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

Decorators are used a lot in Angular. A Decorator is a special kind of declaration that 
can be attached to a class declaration, method, accessor, property, or parameter. 

```typescript
const foo = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
    console.log("decorator -- foo");
}

class Pet {
    constructor(name: string, age: number) {}
    @foo
    bar() {
        console.log('bar');
    }
}
 
let p = new Pet("Max", 12);
p.bar()
```

## Exercise ##

1. Modify ES6 example to use TypeScript.
2. Create an Interface for your `PingPong` class called `IPingPong` and use a `decimal` type for the counter.