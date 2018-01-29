# The Basics

1. What's NodeJS?
2. What's NPM?
3. What's a Module?
4. package.json - scripts, --save and --save-dev
5. Simple node examples (lodash and express)

## NodeJS

NodeJS(R) is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

You can download NodeJS [https://nodejs.org/en/](here).

The Simplest Node Program:

```bash
node -e "console.log('hello world')"
```
or

`node simple.js`

## NPM

NPM stands for Node Package Manager. You can view all the public packages via:
[http://npmjs.com](http://npmjs.com).

A package is a collection of JavaScript that is brought in as a module.

Some basics npm commands.

* `npm init` - initializes your directory with a `package.json` file.
* `npm install {package-name}` - installs a package named `package-name` and creates a `node_modules` folder within the current directory.
* `npm install {package-name} -g` - installs a packaged named `package-name` globally vs locally.
* `npm config` - the configuration details for npm, typically your npm repository location goes here.
* `npm update ...` - to update a package
* `npm uninstall ...` - to uninstall a package


## What is a module?

A module is a piece of code that is imported like an object. In JavaScript you use to get access to 
libraries via including them via `<script>` tags. Then referring to those via a namespace like `jQuery` or `$`.

In NodeJS it's a little different. Here the format is called `CommonJS`. 

```javascript
var Mod = require('./mod.js');
var m = new Mod();
m.foo();

// mod.js
module.exports = function() {
    this.foo = function() {
        console.log('foo bar');
    }
}
```

To run this: `node nodeapp.js`

## package.json, etc.

To initialize a package.json file in your local directory type `npm init .`

The structure of the package is like this:

```json
{
  "name": "some package name",
  "version": "1.0.0",
  "description": "this is a demo of node basics",
  "main": "index.js",
  "scripts": {
    "lodash" : "node lodash-example.js",
    "start" : "node express-example.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.15.4",
    "lodash": "^4.17.4"
  }
}
```

There's a `scripts` section in every `package.json`, this is where you can run commands:

`npm run lodash`
or
`npm start`
or
`npm test`

Dependencies are saved via:

`npm install express --save` or `npm install express --save-dev`

## Event Emitter ##

Since most of Node is built around Async Events, let me give you a short overview.

View this code:

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (stuff) => {
  console.log('an event occurred!');
  console.log(stuff);
});
myEmitter.emit('event', {some:"data"});
```

The `myEmitter` has an `on` method. This on takes a string and a callback as parameters.

## Exercise ##

1. Create a blank project.
2. Do NPM init and add Express
3. Create a REST service for `/hello`.
4. Add a `public` directory with a static HTML file in it to say `hello world`.
5. Create an express route `/ping` and have it respond `pong`.