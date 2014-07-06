exports.HueUtil = function (){

  this.isValidMemberName = function(memberName){
    if(memberName.match("^[a-zA-Z0-9]*$")){
      return memberName.substring(0,1).match("^[a-zA-Z]+$");
    }else{
      return false;
    }
  };

};