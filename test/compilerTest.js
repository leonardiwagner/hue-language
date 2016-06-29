'use strict'

const should = require('chai').should();

const Compiler = require('../src/compiler');

describe('compiler tests', () => {
  const compiler = new Compiler();

  it('should identify first keyword', () => {
    const code = 'class Person\n' +
                 '  name = "John"\n' +
                 '  getName = ()\n' +
                 '    return name';

    compiler.compile(code);
  });
});