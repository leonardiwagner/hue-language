var Class = function(){
  var name;
  var type;
  var variables = [];
  var methods = [];

  function Class(pName, pType){
    this.name = pName;
    this.type = pType;
  }

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