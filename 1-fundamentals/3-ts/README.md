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

```typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
```

### TSConfig.json

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

## Exercise

1. Modify ES6 example to use TypeScript.
2. Create an Interface for your `PingPong` class called `IPingPong` and use a `decimal` type for the counter.