const HueClass = require('./hueClass');

const breakLine = '\n';

class Compiler {
   compile(code) {
    const lines = code.split(breakLine);

    let blockScope = "";
    let isReadingBlockScope = false;

    let hueClass = undefined;
    for(let i = 0; i < lines.length; i++){
      const line = lines[i];
      const indentationSize = this.getIdentationSize(line);
      const words = line.split(' ');

      if(isReadingBlockScope) {
        if(indentationSize === 0){
          isReadingBlockScope = false;
        } else {
          blockScope += line + breakLine;
        }
      }

      if(words[0] === 'class'){
        isReadingBlockScope = true;
        const className = words[1];
        hueClass = new HueClass(className);
      }
    }

     console.log(blockScope);
  }

  getIdentationSize(line) {
    let i = 0;
    for(i; i < line.length; i++){
      if(line[i] !== ' ') break;
    }

    return i;
  }





}

module.exports = Compiler;