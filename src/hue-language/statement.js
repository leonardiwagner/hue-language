var Statement = function(){
  Statement.prototype.TYPES = ['se','senao','para'];
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