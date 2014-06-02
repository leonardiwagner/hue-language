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

      public int compiledLines = 0;
      public string compiledTime = "";
      public List<HueError> compiledErrors = new List<HueError>();
      public List<HueClass> compiledClasses = new List<HueClass>(); 

      public HueCompiler Compile(string code)
      {
          processLines(readCodeLines(code));
          return this;
      }

        public List<HueLine> readCodeLines (string code)
        {
            var codeLines = new List<HueLine>();
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

              codeLines.Add(new HueLine(i, identationLevel,lines[i]));
            }
            return codeLines;
        }

        public void processLines(List<HueLine> codeLines)
        {
          HueClass currentHueClass = null;
          for (var i = 0; i < codeLines.Count; i++)
          {
            var line = codeLines[i];

            if (line.identationLevel > 2)
            {
              //code block from a function
              var currentHueFunction = currentHueClass.hueFunctions[currentHueClass.hueFunctions.Count - 1];
              currentHueFunction.codeBlock.Add(line);
            }
            else if (line.identationLevel == 0)
            {
              //it's the class declaration
              if (currentHueClass != null) this.compiledClasses.Add(currentHueClass);
              currentHueClass = readClassDeclaration(line);
            }
            else if (line.words.Count == 1)
            {
              //it's a void function without parameters
              currentHueClass.addHueFunction(new HueFunction(line.words[0], null, null, null));
            }
            else if (line.words.Count == 2)
            {
              //could be a function without parameters, or variable declaration without values
              var type = line.words[0];
              var name = line.words[1];

              if (codeLines[i + 1].identationLevel > codeLines[i].identationLevel)
              {
                //it's a function without parameters
                currentHueClass.addHueFunction(new HueFunction(name, type, null, null));
              }
              else
              {
                //it's a unitialized variable
                currentHueClass.addHueVariable(new HueVariable(name, type, null));
              }
            }
            else
            {
              if (line.code.IndexOf('=') > 0)
              {
                currentHueClass.addHueVariable(readInitializedVariable(line));
              }
              else if (line.code.IndexOf('(') > 0)
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
          if (currentHueClass != null) this.compiledClasses.Add(currentHueClass);
        }

        private HueClass readClassDeclaration(HueLine hueLine)
        {
          string name = "";
          string type = "";
          if (hueLine.words.Count == 1)
          {
            type = "class";
            name = hueLine.words[0];
          }
          else if (hueLine.words.Count == 2)
          {
            type = hueLine.words[0];
            name = hueLine.words[1];
          }
          else
          {
            //a class that extends another
            //todo: read a class with extensions
          }

          return new HueClass(name, type);
        }

        private HueVariable readInitializedVariable(HueLine hueLine)
        {
          var type = hueLine.words[0];
          var name = hueLine.words[1];
          var value = hueLine.code.Substring(hueLine.code.IndexOf('=') + 1).Trim();

          return new HueVariable(name, type, value);
        }

        private HueFunction readFunctionWithParameters(HueLine line)
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

          return new HueFunction(name, type, parametersList, null);
        }

    }

   
}
