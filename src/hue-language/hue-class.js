var utilFile = require('./hue-util.js');
var hueException = require('./hue-exception.js');
var util = new utilFile.HueUtil();

exports.HueClass = function (pName, pType){
  var name;
  var type;
  this.name = pName;
  this.type = pType;
  this.hueVariables = Array();
  this.hueFunctions = Array();
  var CLASS_TYPES = Array("class","abstract","interface");

  addHueVariable = function(hueVariable){
    this.hueVariables.push(hueVariable);
  };

  addHueFunction = function(hueFunction){
    this.hueFunctions.push(hueFunction);
  };

  this.validate = function(){
    if(!util.isValidMemberName(this.name))
      throw new hueException.HueException(2, "Invalid class name, only alphanumerical characters without spaces are allowed for class name");
    if(CLASS_TYPES.indexOf(this.type) < 0)
      throw new hueException.HueException(3, "Invalid class type, allowed types are: class, abstract or interface");
  };

  this.validate();
};