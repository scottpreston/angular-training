var Rx = require('rxjs/Rx');
var map = require('rxjs/operators/map').map;
var from = require('rxjs/observable/from').from;

var object = [
    {name: 'Tony Stark', alias: 'Iron Man'},
    {name: 'Steve Rogers' , alias: 'Captain America'}
];

const source = from(object);

source.pipe(
  map(val => val.name + ',and more...')
).subscribe(console.log);  