using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class HueCompiler
    {
        public string BREAK_LINE_CHARACTER = "\r\n";

        Statement statement = new Statement();

        public List<HueClass> hueClasses = new List<HueClass>();

        public void Compile(string code)
        {
            processLines(readCodeLines(code));
        }

        public List<HueCodeLine> readCodeLines (string code)
        {
            var codeLines = new List<HueCodeLine>();
            var lines = code.Split(BREAK_LINE_CHARACTER.ToCharArray());
            for(var i = 0; i < lines.Count(); i++){
              //check identation level
              var identationLevel = 0;
              while(identationLevel < lines[i].Length){
                if(lines[i][identationLevel] != ' ') break;
                identationLevel++;
              }

              codeLines.Add(new HueCodeLine(i, identationLevel,lines[i]));
            }
            return codeLines;
        }

        public void processLines(List<HueCodeLine> codeLines)
        {
            HueClass currentHueClass = null;
            for(var i = 0; i < codeLines.Count; i++){
                var line = codeLines[i];

                if(line.identationLevel == 0 && HueClass.TYPES.IndexOf(line.words[0]) >= 0){
                  //only HueClasses in the zero identation
                  if (line.words.Count == 2)
                  {
                    //simple HueClass
                    if (currentHueClass != null) this.hueClasses.Add(currentHueClass);
                    currentHueClass = new HueClass(line.words[1], line.words[0]);
                  }
                  else
                  {
                    //a class that extends other
                    //todo: read a class with extensions
                  }
                }else if(line.identationLevel > 0){
                  if(line.words.Count == 1){
                      //it's a void function without parameters
                      var returnType = line.words[0];
                      var name = line.words[1];
                      currentHueClass.addHueFunction(name, null, null);
                  }else if(line.words.Count == 2){
                      //could be a function without parameters, or variable declaration without values
                      var returnType = line.words[0];
                      var name = line.words[1];

                      if(codeLines[i + 1].identationLevel > codeLines[i].identationLevel){
                      //function without parameters
                          currentHueClass.addHueFunction(name, returnType, null);
                      }else{
                      //unitialized variable
                      currentHueClass.addHueVariable(name, returnType, null);
                      }
                }else{
                    /*
                    //could be a lot of things, such variable assignament, if, for...
                    if(statement.TYPES.IndexOf(line.words[0]) >= 0){
                        if(line.words[0] == "if"){
                            var statementResult = this.statement.checkExpression(line.Substring(line.IndexOf("if") + 1));
                        }
                    }
                    */
                    /*
                    if(line.indexOf('=') > 0){
                        //variable assignment
                        returnType = line.words[0];
                        name = line.words[1];
                        value = line.substr(lines.indexOf('=') + 1);

                        currentHueClass.addHueVariable(name, returnType, value);

                    }
                    */
                    //var logic = ["se","senao","para"];
                }
                }else{
                //error, just hueObjectes in identation lvl 0
                }
            }// end for
        }

    }

   
}
