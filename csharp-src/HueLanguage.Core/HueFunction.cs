using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class HueFunction
    {
        public string type;
        public string name;
        public List<string> parameters = new List<string>();
        public List<HueCodeLine> codeBlock = new List<HueCodeLine>();

        public HueFunction(string type, string name, List<string> parameters, List<HueCodeLine> codeBlock)
        {
            this.type = type;
            this.name = name;
            this.parameters = parameters;
            this.codeBlock = codeBlock;
        }
    }
}
