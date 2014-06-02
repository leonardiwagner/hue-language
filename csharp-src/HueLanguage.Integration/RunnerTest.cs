using System;
using System.Runtime.Remoting;
using HueLanguage.Core;
using NUnit.Framework;
namespace HueLanguage.Integration
{
  public class RunnerTest
  {
    private HueClass compiledClass = null;

    [TestFixtureSetUp]
    public void runnerCompile()
    {
      string code = TestHelper.readTestFile("Runner");
      var compiler = new HueCompiler();
      compiler.Compile(code);
      Assert.IsTrue(compiler.compiledClasses.Count == 1);
      compiledClass = compiler.compiledClasses[0];

    }
  }
}
