using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class HueClass
    {
        public static List<string> TYPES = new List<string>(){"classe","abstrato","interface"}; 

        public String name;
        public String type;
        public List<HueVariable> hueVariables = new List<HueVariable>();
        public List<HueFunction> hueFunctions = new List<HueFunction>();

        public HueClass(string name, string type, int codeLine = 0)
        {
            if (!Util.isValidMemberName(name)) { throw new HueException(2, codeLine, "nome de classe inválido, utilize apenas letras e números sem espaço"); }
            if (TYPES.IndexOf(type) < 0) {  throw new HueException(3,codeLine, "tipo de classe inválido, existe apenas: objeto, abstrato ou interface");}
            
            this.name = name;
            this.type = type;
        }

        public void addHueVariable(string name, string type, string value)
        {
            this.hueVariables.Add(new HueVariable(name, type, value));
        }

        public void addHueFunction(string name, string type, string value)
        {
            this.hueFunctions.Add(new HueFunction(name, type, value));
        }
    }

   

    
}
