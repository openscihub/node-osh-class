# Class

Yet another wrapper for creating classes in js.

## Installation

```
npm install osh-class
```

## Example usage

```js
var Class = require('osh-class');

var Boat = Class(function(opts) {
  // Do stuff with opts object here.
});

// Add methods to prototype like usual.
Boat.prototype.start = function() {
  if (!this.opts.fuel) {
    throw new Error('Put fuel in it.');
  }
};

// You don't have to use new Boat(), but can if you want
var boat = Boat();

// Subclass Boat
var Canoe = Class(Boat, function(opts) {
  opts = {fuel: true};
  this._super(opts);
});
```

## Documentation

Signature:

```
Class([Function super,] Function constructor)
```

The Class function takes 1 or 2 arguments. One of them is always a
constructor function for your class. If 2 arguments are given, the
former is the super class and should be the result of a previous call
to Class.

The constructor function should always accept a single argument: an
options object. This object will be stored automatically on a
class instance as `this.opts`.

A Class constructor is equipped with a `this._super(opts)` method,

```js
var A = Class(function(opts) { //... });
var B = Class(A, function(opts) {this._super(opts);});
```

is equivalent to

```js
var A = Class(function(opts) { //... });
var B = Class(A, function(opts) {A.call(this, opts);});
```

### Idempotency

Example:

```js
var A = Class(function(opts) {
  this.name = opts.name;
});

var a = A({name: 'Oscar'});
var a2 = A(a);

console.log(a === a2); // true
```

## License

MIT
