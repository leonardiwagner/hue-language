var hueLine = require('./hue-line.js');
var hueFunction = require('./hue-function.js');
var hueVariable = require('./hue-variable.js');

exports.HueCompiler = function (){
  

  this.readCodeLines = function(code){
    var IDENTATION_SIZE = 4;
    var codeLines = Array();
    //split code lines
    var lines = code.replace("\r","").split("\n");
    //todo: remove empty lines
    //lines = lines.Where(x => x != "").ToArray();

    //read each code line
    for(var i = 0; i < lines.length; i++){
      //check identation
      var identationLevel = 0;
      for(var j = 0; j < lines[i].length; j++){
        if(lines[i][j] != " "){
          identationLevel = j / IDENTATION_SIZE;
          break;
        }
      }
      codeLines.push(new hueLine.HueLine(i + 1, identationLevel,lines[i]));
    }

    return codeLines;
  };

  this.processLines = function(codeLines){
    var currentHueClass = null;
    for (var i = 0; i < codeLines.length; i++)
    {
      var line = codeLines[i];

      if (line.identationLevel > 2)
      {
        //code block from a function
        var currentHueFunction = currentHueClass.hueFunctions[currentHueClass.hueFunctions.length - 1];
        currentHueFunction.codeBlock.Add(line);
      }
      else if (line.identationLevel === 0)
      {
        //it's the class declaration
        if (currentHueClass !== null) this.compiledClasses.Add(currentHueClass);
        currentHueClass = readClassDeclaration(line);
      }
      else if (line.words.Count === 1)
      {
        //it's a void function without parameters
        currentHueClass.addHueFunction(new HueFunction(line.words[0], null, null, null));
      }
      else if (line.words.Count === 2)
      {
        //could be a function without parameters, or variable declaration without values
        var type = line.words[0];
        var name = line.words[1];

        if (codeLines[i + 1].identationLevel > codeLines[i].identationLevel)
        {
          //it's a function without parameters
          currentHueClass.addHueFunction(new hueFunction.HueFunction(name, type, null, null));
        }
        else
        {
          //it's a unitialized variable
          currentHueClass.addHueVariable(new hueVariable.HueVariable(name, type, null));
        }
      }
      else
      {
        if (line.code.indexOf('=') > 0)
        {
          currentHueClass.addHueVariable(readInitializedVariable(line));
        }
        else if (line.code.indexOf('(') > 0)
        {
          //it's a function with parameters
          currentHueClass.addHueFunction(readFunctionWithParameters(line));
        }
        else
        {
          //todo: throw error, uncognized line
        }
      }
      
    }// end for

    //add last class
    if (currentHueClass !== null) this.compiledClasses.Add(currentHueClass);
  };

  readClassDeclaration = function(hueLine)
  {
    var name = "";
    var type = "";
    if (hueLine.words.length === 1)
    {
      type = "class";
      name = hueLine.words[0];
    }
    else if (hueLine.words.length === 2)
    {
      type = hueLine.words[0];
      name = hueLine.words[1];
    }
    else
    {
      //a class that extends another
      //todo: read a class with extensions
    }

    return new hueClass.HueClass(name, type);
  };

  readInitializedVariable = function(hueLine)
  {
    var type = hueLine.words[0];
    var name = hueLine.words[1];
    var value = hueLine.code.substring(hueLine.code.indexOf('=') + 1).trim();

    return new hueVariable.HueVariable(name, type, value);
  };

  readFunctionWithParameters = function(line)
  {
    var name = null;
    var type = null;
    //function with parameters
    if (line.words[1] == "(")
    {
      //void function
      name = line.words[0];
    }
    else if (line.words[2] == "(")
    {
      //returning function
      type = line.words[0];
      name = line.words[1];
    }
    else
    {
      //todo: throw error
    }

    //read parameters
    var initParam = line.code.indexOf('(');
    var endParam = line.code.indexOf(')');

    var parametersList = Array();
    var parameters = line.code.substring(initParam + 1, endParam - initParam - 1).split(',');
    for (var j = 0; j < parameters.length;j++)
    {
      var variableDeclaration = parameters[j].trim().split(' ');
      var variableType = variableDeclaration[0];
      var variableName = variableDeclaration[1];
      parametersList.push(new hueVariable.HueVariable(variableName, variableType, null));
    }

    return new hueFunction.HueFunction(name, type, parametersList, null);
  };

};
