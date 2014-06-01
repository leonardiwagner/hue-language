using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
    public class Util
    {
        public static bool isValidMemberName(String memberName)
        {
            //check if member name has only alphanumeric characters
            Regex r = new Regex("^[a-zA-Z0-9]*$");
            if (r.IsMatch(memberName))
            {
                return Regex.IsMatch(memberName.Substring(0,1), @"^[a-zA-Z]+$");
            }
            else
            {
                return false;
            }
        }

        public static string readFile(String path)
        {
            return File.ReadAllText(path);
        }
    }
}
