var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    expect = chai.expect;

chai.use(sinonChai);

var Hexagonal = require('../../src/hexagonal');

describe('Hexagonal grid', function(){
  describe('constructor', function(){

    // stub out functions called by the constructor
    beforeEach(function(){
      sinon.stub(Hexagonal, 'calculateOffsets').returns({ });
    });

    // unstub functions called by the constructor
    afterEach(function(){
      Hexagonal.calculateOffsets.restore()
    });

    it('should exist with the expected API', function(){
      expect(typeof Hexagonal).to.equal('function');
      expect(Hexagonal.calculateOffsets).to.exist;
      expect(Hexagonal.prototype.place).to.exist;
    });

    it('should error if you do not pass in at least height and width', function(){
      expect(function(){ new Hexagonal() }).to.throw(Error, /Must include height/);
      expect(function(){ new Hexagonal(2) }).to.throw(Error, /Must include width/);
    });

    it('should precalculate offsets', function(){
      var h = new Hexagonal(1, 1);
      expect(Hexagonal.calculateOffsets).calledOnce;
    });
  });

  describe('calculate offsets', function(){
    it('should exist with the expected API', function(){
      expect(typeof Hexagonal.calculateOffsets).to.equal('function');
    });

    // Super verbose error messages for improper input
    it('should error if you do not pass in the proper parameters', function(){
      expect(function(){
        Hexagonal.calculateOffsets()
      }).to.throw(Error, /include height/);

      expect(function(){
        Hexagonal.calculateOffsets(-1)
      }).to.throw(Error, /height.*a positive integer/);

      expect(function(){
        Hexagonal.calculateOffsets(1)
      }).to.throw(Error, /include width/);

      expect(function(){
        Hexagonal.calculateOffsets(1, -1)
      }).to.throw(Error, /width.*a positive integer/);

      expect(function(){
        Hexagonal.calculateOffsets(1, 1)
      }).to.throw(Error, /include rotation/);

      expect(function(){
        Hexagonal.calculateOffsets(1, 1, 'flat')
      }).to.throw(Error, /include xTilt/);

      expect(function(){
        Hexagonal.calculateOffsets(1, 1, 'flat', -90)
      }).to.throw(Error, /xTilt.*-90/);

      expect(function(){
        Hexagonal.calculateOffsets(1, 1, 'flat', 90)
      }).to.throw(Error, /xTilt.* 90/);

      expect(function(){
        Hexagonal.calculateOffsets(1, 1, 'flat', 1)
      }).to.throw(Error, /include zTilt/);

      expect(function(){
        Hexagonal.calculateOffsets(1, 1, 'flat', 0, -90)
      }).to.throw(Error, /zTilt.*-90/);

      expect(function(){
        Hexagonal.calculateOffsets(1, 1, 'flat', 0, 90)
      }).to.throw(Error, /zTilt.* 90/);
    });

  });
});

