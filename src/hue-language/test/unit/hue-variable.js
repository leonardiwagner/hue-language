var assert = require('chai').assert;

var hueVariable = require('../../hue-variable.js');

it('create HueVariable object', function(done){
  var name = "TEST_VARIABLE";
  var type = "TYPE_VARIABLE";
  var value = "VALUE_VARIABLE";

  var testVariable = new hueVariable.HueVariable(name, type, value);

  assert.equal(testVariable.name, name);
  assert.equal(testVariable.type, type);
  assert.equal(testVariable.value, value);

  done();
});
