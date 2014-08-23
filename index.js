var inherits = require('inherits');
var extend = require('xtend');

module.exports = function(Super, Class) {
  function Constructor(opts) {
    if (opts instanceof Constructor) return opts;
    if (!(this instanceof Constructor)) return new Constructor(opts);
    this.opts = opts;
    this._super = Super && Super.bind(this);
    Class.call(this, opts);
  }

  Constructor.prototype.New = function(opts) {
    return Constructor(
      extend(this.opts, opts || {})
    );
  };

  Class = Class || Super;
  if (Super !== Class) inherits(Constructor, Super);
  else Super = null;
  return Constructor;
};
