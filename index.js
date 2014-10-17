var inherits = require('inherits');
var extend = require('xtend/mutable');

function Class(Super, proto) {
  if (!proto) {
    proto = Super || {};
    Super = null;
  }

  var Constructor = (
    Object === proto.constructor ?
    function() {Super && Super.apply(this, arguments);} :
    proto.constructor
  );

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
