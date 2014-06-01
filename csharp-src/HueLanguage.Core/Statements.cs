using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class Statement
    {
        public List<String> TYPES = new List<string>(){"se","senao","para"};
        public List<String> OPERATORS = new List<string>(){">","<","=="};

        public bool checkExpression(string expression, int codeLine)
        {
            string firstExpression;
            string secondExpression;

            //check if expression is true or false
            //todo: check multiple expressions inside one, like (1 > 2) & (1< 0)
            for(int i = 0; i < OPERATORS.Count; i++){
                if(expression.IndexOf(OPERATORS[i]) > 0){
                    firstExpression = expression.Substring(0,expression.IndexOf(OPERATORS[i]));
                    secondExpression = expression.Substring(expression.IndexOf(OPERATORS[i]) + OPERATORS[i].Length);

                    switch(OPERATORS[i]){
                        case ">": return int.Parse(firstExpression) > int.Parse(secondExpression);
                        case "<": return int.Parse(firstExpression) < int.Parse(secondExpression);
                        case "==": return firstExpression == secondExpression;
                    }
                }
            }

            throw new HueException(1, codeLine,"EXPRESSÃO INVÁLIDA");
        }
    }
}
