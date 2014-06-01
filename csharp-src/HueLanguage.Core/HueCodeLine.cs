using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace HueLanguage.Core
{
    public class HueCodeLine
    {
        public int number;
        public int identationLevel;
        public string code;
        public List<String> words = new List<string>();

        public HueCodeLine(int number, int identationLevel, string code)
        {
            this.number = number;
            this.identationLevel = identationLevel;
            this.code = code;

          
          Regex r = new Regex("^[a-zA-Z0-9]*$");

          var lastWordPos = 0;
          var isAlphanumerical = true;
          var isEndOfAWord = false;
          for (int i = 0; i <= code.Length; i++)
          {

            if (i == code.Length)
            {
              isEndOfAWord = true;
            }
            else if (r.IsMatch(code[i].ToString()))
            {
              //check if it's the end of non-alphanumeric word
              if (!isAlphanumerical)
              {
                //end of a word
                isEndOfAWord = true;
                isAlphanumerical = true;
              }
            }
            else
            {
              if (i == 0)
              {
                isAlphanumerical = false;
              }else if (isAlphanumerical)
              {
                //end of a word
                isEndOfAWord = true;
                isAlphanumerical = false;
              }
            }

            if (isEndOfAWord)
            {
              var word = code.Substring(lastWordPos, i - lastWordPos).Trim();
              if (word != "") {
                  this.words.Add(word);
                 }
              lastWordPos = i;
              isEndOfAWord = false;

            }
          }

        }
    }
}
