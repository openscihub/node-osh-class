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

  if (!Class) {
    Class = Super;
    Super = null;
  }
  else inherits(Constructor, Super);

  Constructor.prototype.New = function(opts) {
    return Constructor(
      extend(this.opts, opts || {})
    );
  };

  return Constructor;
};
