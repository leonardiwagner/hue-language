using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class HueVariable
    {
        public string type;
        public string name;
        public string value;

        public HueVariable(string name, string type, string value)
        {
            this.type = type;
            this.name = name;
            this.value = value;
        }
    }
}
