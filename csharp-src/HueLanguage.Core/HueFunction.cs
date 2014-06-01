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
        public List<HueVariable> parameters = new List<HueVariable>();
        public List<HueCodeLine> codeBlock = new List<HueCodeLine>();

        public HueFunction(string name, string type, List<HueVariable> parameters, List<HueCodeLine> codeBlock)
        {
            this.type = type;
            this.name = name;
            this.parameters = parameters;
            this.codeBlock = codeBlock;
        }
    }
}
