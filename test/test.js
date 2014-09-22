var Class = require('..');
var expect = require('expect.js');

describe('Class', function() {
  it('should make a lone class', function() {
    var C = Class({});
    C.prototype.f = function() {return 'hi';};
    var c = C();
    expect(c.f()).to.be('hi');
    expect(c).to.be.a(C);
  });

  it('should inherit', function() {
    var B = Class({
      f: function() {return 'hi';},
      h: function() {return 'hi';}
    });

    var C = Class(B, {
      constructor: function(opts) {this._super(opts);},
      g: function() {return 'there';},
      h: function() {return 'there';}
    });

    var c = C();
    console.log(c);
    console.log(c.__proto__);
    expect(c.f).to.be.ok();
    expect(c.g).to.be.ok();
    expect(c.h()).to.be('there');
    expect(c).to.be.a(C);
    expect(c).to.be.a(B);
  });

  it('should super', function() {
    var A = Class({
      constructor: function() {this.valA = 3;}
    });
    var B = A.extend({
      constructor: function() {this._super(); this.valB = 4;}
    });

    var b = B();
    expect(b.valA).to.be(3);
    expect(b.valB).to.be(4);
  });

  it('should extend', function() {
    var B = Class({});
    B.prototype.f = function() {return 'hi';};

    var C = B.extend({
      constructor: function() {this.i = 0;},
      g: function() {return 'hi g';}
    });

    var c = C();

    expect(c).to.be.a(C);
    expect(c).to.be.a(B);
    expect(c.g()).to.be('hi g');
  });
});
