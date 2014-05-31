
var HueCompiler = function(pCode){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statement = new Statement();
  var hueObject = new HueObject();

  var hueObjects = [];

  var readCodeLines = function(pCode){
    var codeLines = [];
    var lines = pCode.split(BREAK_LINE_CHARACTER);
    for(var i = 0; i < lines.length; i++){
      //check identation level
      var identationLevel = 0;
      lines[i] = lines[i].replace('\n','');
      charactersInLine = lines[i].split('');
      while(identationLevel < charactersInLine.length){
        if(charactersInLine[identationLevel] != ' ') break;
        identationLevel++;
      }

      codeLines.push(new Line(i, identationLevel,lines[i]));
    }
    return codeLines;
  };

  //process lines
  var processLines = function(pCodeLines){
    var currentHueObject = null;
    for(var i = 0; i < codeLines.length; i++){
      line = codeLines[i];

      if(line.identationLevel === 0 && hueObject.TYPES.indexOf(line.words[0]) >= 0){
        //it's a hueObject!
        if(line.words.length == 2){
          currentHueObject = new HueObject(line.words[1],line.words[0]);
        }
      }else if(line.identationLevel > 0){
        if(line.words.length == 1){
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentHueObject.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentHueObject.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentHueObject.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          if(statement.TYPES.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = this.statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(line.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentHueObject.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
        }
      }else{
        //error, just hueObjectes in identation lvl 0
      }
    }// end for
  }; //end function  

  //constructor
  var codeLines = readCodeLines(pCode);
  processLines(codeLines);

}; // end hueObject

var Line = function(pNumber, pIdentationLevel, pLine){
  var number;
  var identationLevel;
  var line;
  var words;

  this.number = pNumber;
  this.identationLevel = pIdentationLevel;
  this.line = pLine.replace('\n','');
  this.words = this.line.substr(pIdentationLevel).split(' ');
};