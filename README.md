# Class

Yet another wrapper for creating classes in js.

## Installation

```
npm install osh-class
```

## Example usage

```js
var Class = require('osh-class');

// Pass in a prototype object.
var Boat = Class({
  constructor: function(opts) {
    // Do stuff with opts object here.
    this.opts = opts;
  },

  start: function() {
    if (!this.opts.fuel) {
      throw new Error('Put fuel in it.');
    }
    this._running = true;
  }
});


// Or add non-constructor methods to prototype one-by-one.
Boat.prototype.stop = function() {
  this._running = false;
};

// You don't have to use new Boat(), but can if you want
var boat = Boat();

// Subclass Boat
var Canoe = Class(Boat, {
  constructor: function() {
    this._super({fuel: true});
  }
});

// Or like so,
var QueenMary = Boat.extend({
  constructor: function() {
    this._super({fuel: false});
  }
});
```

## Documentation

Signature:

```
Class([Function super,] Object prototype)
```

The Class function takes 1 or 2 arguments. One of them is always a
prototype for your class. If 2 arguments are given, the
former is the super class and should be the result of a previous call
to Class.

A Class constructor is equipped with a `this._super(opts)` method,

```js
var A = Class({
  constructor: function(value) {this.value = value;}
});
var B = Class(A, {
  constructor: function() {this._super(1);}
});

var b = B();
console.log(b.value); // 1
```

If an explicit `constructor` function is not specified on a subclass,
the constructor
of the superclass will be used. For example,

```js
var A = Class({
  constructor: function(value) {this.value = value;}
});
var B = Class(A, {});

var b = B(1);
console.log(b.value); // 1
```

## License

MIT
