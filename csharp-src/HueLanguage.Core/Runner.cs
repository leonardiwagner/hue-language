using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HueLanguage.Core
{
  public class Runner
  {
    private HueCompiler hueCompiledCode;
    public Runner(HueCompiler hueCompiler)
    {
      hueCompiledCode = hueCompiler;
    }
  }
}
