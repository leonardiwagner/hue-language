var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statement = new Statement();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = this.statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statement = new Statement();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = this.statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

  var statements = new Statements();


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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var Class = function(pName, pType){
  Class.prototype.CLASS_TYPE = ['objeto','interface','abstrato'];

  var name;
  var type;
  var variables = [];
  var methods = [];

  //constructor
  this.name = pName;
  this.type = pType;

  var addVariable = function(pVariable){
    this.variables.push(pVariable);

    console.log('Created variable "' + pVariable.name + "' into class '" + this.name + "'");
  };

  var addMethod = function(pMethod){
    this.functions.push(pMethod);

    console.log('Created method "' + pMethod.name + "' into class '" + this.name + "'");
  };

  console.log('Created class "' + this.name + '" of type "' + this.type + '"');
};

var Variable = function(name, type, value){
  var _type;
  var _name;
  var _value;

  _type = type;
  _name = name;
  _value = value;
};

var Method = function(name, type, parameters){
  var _type;
  var _name;
  var _parameters;

  _type = type;
  _name = name;
  _parameters = parameters;
};
var statements = new Statements();

var HueCompiler = function(){
  var BREAK_LINE_CHARACTER = '#';
  var RESERVED_WORDS = ['objeto','abstrato','interface','t','n','listade','se','senao','para','em','herda','retorna','eu','pai'];

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
          //it's a void function without parameters
          returnType = line.words[0];
          name = line.words[1];
          currentClass.addMethod(name, null, null);
        }else if(line.words.lenght == 2){
          //could be a function without parameters, or variable declaration without values
          returnType = line.words[0];
          name = line.words[1];

          if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
            //function without parameters
            currentClass.addMethod(name, returnType, null);
          }else{
            //unitialized variable
            currentClass.addVariable(name, returnType, null);
          }
        }else{
          //could be a lot of things, such variable assignament, if, for...
          var statements = ['se','senao','para'];
          if(statments.indexOf(line.words[0]) >= 0){
            if(line.words[0] == 'if'){
              var statementResult = statements.checkExpression(line.substr(line.indexOf('if') + 1));
            }
          }

          if(lines.indexOf('=') > 0){
            //variable assignment
            returnType = line.words[0];
            name = line.words[1];
            value = line.substr(lines.indexOf('=') + 1);

            currentClass.addVariable(name, returnType, value);

          }

          //var logic = ["se","senao","para"];
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
var CompilerError = function(number, description){
  var _number;
  var _description;

  _number = number;
  _description = description;
};
var operators = ['>','<','=='];

var checkExpression = function(pExpression){
  var firstExpression;
  var secondExpression;
  var operator;

  //check if expression is true or false
  //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
  for(i = 0; i < operators.length; i++){
    if(pExpression.indexOf(operators[i]) > 0){
      firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
      secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

      switch(operators[i]){
        case '>': return firstExpression > secondExpression;
        case '<': return firstExpression < secondExpression;
        case '==': return firstExpression == secondExpression;
      }
    }
  }

};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};
var Statement = function(){

  var operators = ['>','<','=='];

  var checkExpression = function(pExpression){
    var firstExpression;
    var secondExpression;
    var operator;

    //check if expression is true or false
    //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
    for(i = 0; i < operators.length; i++){
      if(pExpression.indexOf(operators[i]) > 0){
        firstExpression = pExpression.substr(0,pExpression.indexOf(operators[i]));
        secondExpression = pExpression.substr(pExpression.indexOf(operators[i]) + operators[i].length);

        switch(operators[i]){
          case '>': return firstExpression > secondExpression;
          case '<': return firstExpression < secondExpression;
          case '==': return firstExpression == secondExpression;
        }
      }
    }

  };
};