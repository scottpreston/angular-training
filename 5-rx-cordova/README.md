# RXJS/Observables & Cordova #

## Promises ##

From Day #1.

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* Promise.all - returns a single promise when all passed in promisies resolve.
* Promise.resolve - returns a promise that resolves and is `thenabled`.
* Promise.reject - returns a promise object that is rejected.
* Promise.then - is a promise and takes success and failure callbacks.

## Observables ##

From `ReactiveX` [http://reactivex.io/documentation/observable.html](http://reactivex.io/documentation/observable.html).

![observable image](./observable.png "observable image")

Simplest Observable In Code:

```javascript
var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hi')
  }, 1000);
});

observable.subscribe(x => console.log(x));
});
```

## Observables vs. Promises ##

From [https://stackoverflow.com/questions/37364973/angular-promise-vs-observable](https://stackoverflow.com/questions/37364973/angular-promise-vs-observable)

A `Promise` handles a single event when an async operation completes or fails.

An `Observable` is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.

## Operators ##

## NG-Rx-Store ##