var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna'];

  
  function HueCompiler(pCode){
    var codeLines = this.readCodeLines(pCode);
    this.processLines(codeLines);
  }

  var readCodeLines = function(pCode){
    var codeLines = [];
    var lines = code.split(BREAK_LINE_CHARACTER);
    for(var i = 0; i < lines.length; i++){
      //check identation level
      var identationLevel = 0;
      charactersInLine = lines[i].split('');
      while(identationLevel < charactersInLine.length){
        if(charactersInLine[identationLevel ] != ' ') break;
        identationLevel++;
      }

      codeLines.push(new Line(i, identationLevel,lines[i]));
    }
    return codeLines;
  };

  //process lines
  var processLines = function(pCodeLines){
    var currentClass = null;
    for(var i = 0; i < codeLines.length; i++){
      line = codeLines[i];

      if(line.identationLevel === 0 && classes.indexOf(line.words[0]) >= 0){
        //it's a class!
        if(line.words.length == 2){
          currentClass = new Class(line.words[1],line.words[0]);
        }
      }else if(line.identationLevel > 0){
        if(line.words.length == 1){
          //it's a void function
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addFunction(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{

        }
      }else{
        //error, just classes in identation lvl 0
      }
    }// end for
  }; //end function  

}; // end class

var Line = function(pNumber, pIdentationLevel, pLine){
  var number;
  var identationLevel;
  var line;
  var words;

  this.number = pNumber;
  this.identationLevel = pIdentationLevel;
  this.line = pLine.replace('\n','');
  this.words = pLine.substr(pIdentationLevel).split(' ');
};