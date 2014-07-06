exports.HueLine = function (pNumber, pIdentationLevel, pCode){
  this.number = pNumber;
  this.identationLevel = pIdentationLevel;
  this.code = pCode;
  this.words = Array();

  var regex = "^[a-zA-Z0-9]*$";

  var lastWordPos = 0;
  var isAlphanumerical = true;
  var isEndOfAWord = false;
  for (var i = 0; i <= this.code.length; i++){
    if(this.code[i] === undefined) break;
    
    if (i == this.code.length){
      isEndOfAWord = true;
    }else if (this.code[i].match(regex)){
      //check if it's the end of non-alphanumeric word
      if (!isAlphanumerical){
        //end of a word
        isEndOfAWord = true;
        isAlphanumerical = true;
      }
    }else{
      if (i === 0){
        isAlphanumerical = false;
      }else if (isAlphanumerical){
        //end of a word
        isEndOfAWord = true;
        isAlphanumerical = false;
      }
    }

    if (isEndOfAWord){
      var word = this.code.substring(lastWordPos, i - lastWordPos).trim();
      if (word !== "") {
        this.words.push(word);
      }
      lastWordPos = i;
      isEndOfAWord = false;
    }
  }

};
