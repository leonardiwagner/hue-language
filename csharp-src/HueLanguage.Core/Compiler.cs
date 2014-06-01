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
            //split code lines
            var lines = code.Replace("\r","").Split('\n');
            //remove empty lines
            lines = lines.Where(x => x != "").ToArray();

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
          for (var i = 0; i < codeLines.Count; i++)
          {
            var line = codeLines[i];

            if (line.identationLevel == 0 && HueClass.TYPES.IndexOf(line.words[0]) >= 0)
            {
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
            }
            else if (line.identationLevel == 2)
            {
              //class elements (variables and functions)
              if (line.words.Count == 1)
              {
                //it's a void function without parameters
                var name = line.words[0];
                currentHueClass.addHueFunction(name, null, null, null);
              }
              else if (line.words.Count == 2)
              {
                //could be a function without parameters, or variable declaration without values
                var returnType = line.words[0];
                var name = line.words[1];

                if (codeLines[i + 1].identationLevel > codeLines[i].identationLevel)
                {
                  //function without parameters
                  currentHueClass.addHueFunction(name, returnType, null, null);
                }
                else
                {
                  //unitialized variable
                  currentHueClass.addHueVariable(name, returnType, null);
                }
              }
              else
              {
                
                if(line.code.IndexOf('=') > 0){
                    //variable assignment
                    var returnType = line.words[0];
                    var name = line.words[1];
                    var value = line.code.Substring(line.code.IndexOf('=') + 1).Trim();

                    currentHueClass.addHueVariable(name, returnType, value);
                }
                else if (line.code.IndexOf('(') > 0)
                {
                  string name = null;
                  string type = null;
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
                  var initParam = line.code.IndexOf('(');
                  var endParam = line.code.IndexOf(')');

                  List<HueVariable> parametersList = new List<HueVariable>();
                  var parameters = line.code.Substring(initParam + 1, endParam - initParam - 1).Split(',');
                  for (int j = 0; j < parameters.Count();j++)
                  {
                    var variableDeclaration = parameters[j].Trim().Split(' ');
                    var variableType = variableDeclaration[0];
                    var variableName = variableDeclaration[1];
                    parametersList.Add(new HueVariable(variableName, variableType, null));
                  }
                  currentHueClass.addHueFunction(name, type, parametersList, null);
                }

              }
            }
          }// end for

          //add last class
          if (currentHueClass != null) this.hueClasses.Add(currentHueClass);
        }

    }

   
}
