# Overview of Jasmine Unit Testing Framework #

## Simple Jasmine Test ##

```bash
npm install jasmine --save
jasmine init
jasmine
```

The object/function.

```javascript
module.exports = function() {
    return "world";
}
```

The Spec.

```javascript
describe("test basic jasmine" , function() {
    it("test hello", function() {
        var o = require('../object');
        expect(o()).toEqual("world");
    });
});
```

## Jasmine Overview ##

1. Set-Up
2. Test/Act
3. Assert/Expect

### API Overview ###

[https://jasmine.github.io/pages/docs_home.html](https://jasmine.github.io/pages/docs_home.html) 

* `describe` - a group of specs or suite
* `it` - an individual spec, testing 1 thing.
* `expect` - matchers to test.
* `matchers` - toBeEqual, toBeFalsy, toBe, ...
* `beforeAll` - before all specs
* `beforeEach` - before each spec
* `afterAll` - after app specs
* `afterEach` - after each spec
* `spyOn` - Spy on object and methods.

Additional Matchers 

`npm install jasmine-matchers`
[https://github.com/JamieMason/Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers)

## Jasmine Spys ##

Often used to assert behavior and test behavior. Gets coverage numbers up, but brittle.

```javascript
module.exports = function(i) {
    var newI = i + i;
    console.log(newI);
    return newI;
}

describe("test basic jasmine" , function() {
    it("test doubler", function() {
        var doubler = require('../object2');
        expect(doubler(1)).toEqual(2);
    });
    it("test that console was called", function() {
        spyOn(console,'log');
        var doubler = require('../object2');
        doubler(1);
        expect(console.log).toHaveBeenCalled();
    });
});
```
