var should = require('should')
var only = require('..');

var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345',
  phone: null
};

var expected = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  phone: null
};

describe('only(obj, keys)', function(){
  describe('given an array', function(){
    it('should return only the whitelisted properties', function(){
      only(obj, ['name', 'email', 'last', 'phone']).should.eql(expected);
    })
  })

  describe('given an string', function(){
    it('should return only the whitelisted properties', function(){
      only(obj, 'name email last phone').should.eql(expected);
    })
  })

  it('should omit undefineds', function(){
    only({}, 'foo bar baz').should.eql({});
  })
})
