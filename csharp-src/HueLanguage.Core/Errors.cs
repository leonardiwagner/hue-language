using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class HueException : Exception
    {
        public int number;
        public String message;

        public HueException(int number, int codeLine, string message) : base(message)
        {
            this.number = number;
            this.message = message;
        }
        
    }
}
