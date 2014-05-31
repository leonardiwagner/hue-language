function HueCompiler(code){
  var BREAK_LINE_CHARACTER = '#';
  var reservedWords = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna'];


  //read lines
  var codeLines = new Array();
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

  var classes = ['objeto','interface','abstrato'];
  var enteredIntoAFunction = false;
  var currentClass = null;
  for(var i = 0; i < codeLines.length; i++){
    line = codeLines[i];
    /*
    //check if this line is the first line of a function
    if(i > 0){
      if(codeLines[i].identationLevel > codeLines[i -1].identationLevel){
        enteredIntoAFunction = true;
      }else if(codeLines[i].identationLevel < codeLines[i -1].identationLevel){
        enteredIntoAFunction = false;
      }
    }
  */
    if(line.identationLevel == 0 && classes.indexOf(line.words[0]) >= 0){
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

  }
}

function Class(name, type){
  var variables = new Array();
  var functions = new Array();

  function addVariable(variable){
    this.variables.push(variable);
    console.log('Created variable "' + variable.name + "' into class '" + this.name + "'");
  }

  function addFunction(pFunction){
    this.functions.push(pFunction);
    console.log('Created function "' + pFunction.name + "' into class '" + this.name + "'");
  }

  console.log('Created class "' + name + '" of type "' + type + '"');
}

function Variable(name, type, value){
  var type;
  var name;
  var value;

  this.type = type;
  this.name = name;
  this.value = value;
}

function Function(name, type, parameters){
  var type;
  var name;
  var parameters;

  this.type = type;
  this.name = name;
  this.parameters = parameters;
}


function Line(number, identationLevel, line){
  var number;
  var identationLevel;
  var line;
  var words;

  this.number = number;
  this.identationLevel = identationLevel;
  this.line = line.replace('\n','');
  this.words = line.substr(identationLevel).split(' ');
}


var errors = new Array();
function CompileError(error){
  errors.push(error);
}

function Error(number, description){
  var number;
  var description;

  this.number = number;
  this.description = description;
}
