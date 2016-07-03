const HueClass = require('./hueClass');

const breakLine = '\n';

class Compiler {
  constructor(){
    this.hueClasses = [];
  }


   compile(code) {
    const lines = code.split(breakLine);

    this.readHueClasses(lines);

     return this.hueClasses;
  }

  readHueClasses(lines){
    for(let i = 0; i < lines.length; i++){
      const lineWords = lines[i].split(' ');

      if(lineWords[0] === 'class') {
        const hueClassName = lineWords[1];
        let hueClassLines = '';
        i++;

        while(this.getIdentationSize(lines[i]) !== 0){
          hueClassLines += lines[i] + breakLine;
          i++;
        }

        this.hueClasses.push(new HueClass(hueClassName, hueClassLines))
        i--;
      }
    }
  }

  getIdentationSize(line) {
    if(!line) return 0;

    let i = 0;
    for(i; i < line.length; i++){
      if(line[i] !== ' ') break;
    }

    return i;
  }





}

module.exports = Compiler;