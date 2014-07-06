var assert = require('chai').assert;

var hueClass = require('../../hue-class.js');

it('create HueClass object', function(done){
  var name = "test";
  var type = "class";

  var testClass = new hueClass.HueClass(name, type);

  assert.equal(testClass.name, name);
  assert.equal(testClass.type, type);

  done();
});

it('create HueClass with invalid name', function(done){

  try{
    var testClass = new hueClass.HueClass("1$#%", "class");
  }catch(e){
    //fail e.number = 2
  }

  done();
});

it('create HueClass with invalid type', function(done){

  try{
    var testClass = new hueClass.HueClass("test", "invalid");
  }catch(e){
    //fail e.number = 3
  }

  done();
});

it('create HueClass with valid type', function(done){

  var testClass1 = new hueClass.HueClass("test", "class");
  assert.equal(testClass1.type, "class");

  var testClass2 = new hueClass.HueClass("test", "abstract");
  assert.equal(testClass2.type, "abstract");

  var testClass3 = new hueClass.HueClass("test", "interface");
  assert.equal(testClass3.type, "interface");

  done();
});

