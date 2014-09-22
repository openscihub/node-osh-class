var inherits = require('inherits');
var extend = require('xtend/mutable');

function Class(Super, proto) {
  //function Constructor(opts) {
  //  if (opts instanceof Constructor) return opts;
  //  if (!(this instanceof Constructor)) return new Constructor(opts);
  //  this.opts = opts;
  //  this._super = Super && Super.bind(this);
  //  Class.call(this, opts);
  //}

  if (!proto) {
    proto = Super || {};
    Super = null;
  }

  var Constructor = proto.constructor;

  function _Constructor() {
    var instance = this;
    if (!(instance instanceof _Constructor)) {
      instance = Object.create(_Constructor.prototype);
    }
    instance._super = Super;
    Constructor.apply(instance, arguments);
    return instance;
  }

  Super && inherits(_Constructor, Super);

  extend(_Constructor.prototype, proto);
  _Constructor.prototype.constructor = _Constructor;

  _Constructor.extend = function(proto) {
    return Class(_Constructor, proto);
  };

  return _Constructor;
};

module.exports = Class;
