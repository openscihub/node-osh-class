var Class = require('..');
var expect = require('expect.js');

describe('Class', function() {
  it('should make a lone class', function() {
    var C = Class(function(opts) {});
    C.prototype.f = function() {return 'hi';};
    var c = C({});
    expect(c.f()).to.be('hi');
  });

  it('should inherit', function() {
    var B = Class(function(opts) {});
    B.prototype.f = function() {return 'hi';};
    B.prototype.h = function() {return 'hi';};

    var C = Class(B, function(opts) {this._super(opts);});
    C.prototype.g = function() {return 'there';};
    C.prototype.h = function() {return 'there';};

    var c = C({});
    console.log(c);
    console.log(c.__proto__);
    expect(c.f).to.be.ok();
    expect(c.g).to.be.ok();
    expect(c.h()).to.be('there');
  });

  it('should give idempotent instance', function() {
    var C = Class(function() {});
    var B = Class(function() {});

    var c = C({});
    c.tag = 'tag';
    var c2 = C(c);
    expect(c2.tag).to.be('tag');

    var b = B({});
    b.tag = 'tag';
    c = C(b);
    expect(c.tag).to.be(undefined);
  });
    
});
