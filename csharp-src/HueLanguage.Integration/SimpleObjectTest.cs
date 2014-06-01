using System;
using HueLanguage.Core;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace HueLanguage.Integration
{
    [TestClass]
    public class SimpleObjectTest
    {
        [TestMethod]
        public void ReadFile()
        {
            string code = TestHelper.readTestFile("SimpleObject");
        }

        [TestMethod]
        public void CompileSimpleObject()
        {
            string code = TestHelper.readTestFile("SimpleObject");
            var compiler = new HueCompiler();
            compiler.Compile(code);

            Assert.IsTrue(compiler.hueClasses.Count == 1);

            var testClass = compiler.hueClasses[0];

            Assert.IsTrue(testClass.hueFunctions.Count == 3);
            Assert.IsTrue(testClass.hueFunctions.Count == 3);

        }
    }
}
