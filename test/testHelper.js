const fs = require('fs');

module.exports = {
  readSpec: specFileName => {
    return fs.readFileSync(`./test/${specFileName}.spec.hue`, 'utf8');
  }
}