class HueClass {
  constructor(className, classCode){
    this.name = className;
    this.classCode = classCode;
    this.hueVariables = [];
    this.hueFunctions = [];
  }

  compileClass(code){
    let hueClass = undefined;
    for(let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const indentationSize = this.getIdentationSize(line);
      const words = line.split(' ');

      const variableName = words[0];
      const declarationIdentifier = words[1];

      if(declarationIdentifier !== '='){
        throw 'what the f are you wanting to do here?';
      }

      const value = words[2];
      if(value === '('){
        //function
      }else{
        this.addHueVariables(variableName, value);
      }


    }
  }

  addHueVariables(name, value){
    this.addHueVariables.push({
      'name': name,
      'value': value
    });
  }
  addHueFunctions(x){
    this.hueFunctions.push(x);
  }

  getIdentationSize(line) {
    let i = 0;
    for(i; i < line.length; i++){
      if(line[i] !== ' ') break;
    }

    return i;
  }
}

module.exports = HueClass;