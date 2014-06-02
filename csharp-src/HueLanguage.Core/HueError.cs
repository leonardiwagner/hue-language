using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class HueError : Exception
    {
        public int number;
        public String message;

        public HueError(int number, int codeLine, string message) : base(message)
        {
            this.number = number;
            this.message = message;
        }
        
    }
}
