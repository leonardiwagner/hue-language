'use strict'

const should = require('chai').should();
const testHelper = require('./testHelper')

const Compiler = require('../src/compiler');

describe('compiler tests', () => {
  const compiler = new Compiler();

  it('should identify classes', () => {
    const code = testHelper.readSpec('twoSimpleClasses');
    compiler.compile(code);

    compiler.hueClasses[0].name.should.equals('Person');
    compiler.hueClasses[1].name.should.equals('Company');
  });
});