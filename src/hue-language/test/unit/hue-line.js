var assert = require('chai').assert;

var hueLine = require('../../hue-line.js');

it('create HueLine object', function(done){
  var number = 3;
  var identationLevel = 2;
  var code = "TEST_CODE";

  var testLine = new hueLine.HueLine(number, identationLevel, code);

  assert.equal(testLine.number, number);
  assert.equal(testLine.identationLevel, identationLevel);
  assert.equal(testLine.code, code);

  done();
});

it('code line word parse', function(done){

  var codeLine = new hueLine.HueLine(1, 0, "var (x == 2)");
  console.log(codeLine.words);
  assert.equal(6, codeLine.words.length);
  assert.equal("var", codeLine.words[0]);
  assert.equal("(", codeLine.words[1]);
  assert.equal("x", codeLine.words[2]);
  assert.equal("==", codeLine.words[3]);
  assert.equal("2", codeLine.words[4]);
  assert.equal(")", codeLine.words[5]);

  done();
});
