using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            this.words = this.code.Substring(identationLevel).Split(' ').ToList();
        }
    }
}
