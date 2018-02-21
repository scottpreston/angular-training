var Rx = require('rxjs/Rx');
var map = require('rxjs/operators/map').map;

var observable = Rx.Observable.create(function subscribe(observer) {
    var id = setInterval(() => {
      observer.next('hi')
    }, 1000);
  });

let count = 0;
const toUp = map(val => val.toUpperCase());
const withCount = map(val => val + count++);

observable.pipe(
  toUp,
  withCount,
  map(val => val + ',and more...')
).subscribe(console.log);  