using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using HueLanguage.Core;

namespace HueLanguage.Integration
{
    public class TestHelper
    {
        public static string readTestFile(string name)
        {
            string codeBase = Assembly.GetExecutingAssembly().CodeBase;
            UriBuilder uri = new UriBuilder(codeBase);
            string path = Uri.UnescapeDataString(uri.Path);
            path = Path.GetDirectoryName(path) + "\\Files\\" + name + ".hue";


            return Util.readFile(path);
        }
    }
}
