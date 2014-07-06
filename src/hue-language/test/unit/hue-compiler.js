var assert = require('chai').assert;

var hueCompiler = require('../../hue-compiler.js');

it('compiler line number and identation read', function(done){
  var testCodeFirstLine = "this is the first line\n";
  var testCodeSecondLine = "    this is the second line\n";
  var testCodeThirdLine = "        this is the third line";
  var testCode = testCodeFirstLine + testCodeSecondLine + testCodeThirdLine;

  var compiler = new hueCompiler.HueCompiler();
  var hueLines = compiler.readCodeLines(testCode);

  assert.equal(hueLines[0].number, 1);
  assert.equal(hueLines[0].identationLevel, 0);

  assert.equal(hueLines[1].number, 2);
  assert.equal(hueLines[1].identationLevel, 1);

  assert.equal(hueLines[2].number, 3);
  assert.equal(hueLines[2].identationLevel, 2);

  done();
});
