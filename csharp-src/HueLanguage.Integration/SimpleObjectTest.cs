using System;
using HueLanguage.Core;
using NUnit.Framework;

namespace HueLanguage.Integration
{
    public class SimpleObjectTest
    {
      private HueClass compiledClass = null;

      [TestFixtureSetUp]
      public void simpleObjectCompile()
      {
        string code = TestHelper.readTestFile("SimpleObject");
        var compiler = new HueCompiler();
        compiler.Compile(code);
        Assert.IsTrue(compiler.hueClasses.Count == 1);
        compiledClass = compiler.hueClasses[0];

        Assert.AreEqual("class", compiledClass.type);
        Assert.AreEqual("person", compiledClass.name);

        Assert.AreEqual(3, compiledClass.hueVariables.Count);
        Assert.AreEqual(4, compiledClass.hueFunctions.Count);
      }

      [Test]
      public void simpleObjectVariableInitializedText()
      {
        Assert.AreEqual("firstName", compiledClass.hueVariables[0].name);
        Assert.AreEqual("text", compiledClass.hueVariables[0].type);
        Assert.AreEqual("\"joe\"", compiledClass.hueVariables[0].value);
      }

      [Test]
      public void simpleObjectVariableUntialized()
      {
        Assert.AreEqual("lastName", compiledClass.hueVariables[1].name);
        Assert.AreEqual("text", compiledClass.hueVariables[1].type);
        Assert.AreEqual(null, compiledClass.hueVariables[1].value);
      }

      [Test]
      public void simpleObjectVariableInitializedNumber()
      {
        Assert.AreEqual("age", compiledClass.hueVariables[2].name);
        Assert.AreEqual("number", compiledClass.hueVariables[2].type);
        Assert.AreEqual("18", compiledClass.hueVariables[2].value);
      }

      [Test]
      public void simpleObjectVoidFunction()
      {
        Assert.AreEqual("walk", compiledClass.hueFunctions[0].name);
        Assert.AreEqual(null, compiledClass.hueFunctions[0].type);
        Assert.AreEqual(null, compiledClass.hueFunctions[0].parameters);
      }

      [Test]
      public void simpleObjectFunctionWithoutParameters()
      {
        Assert.AreEqual("getName", compiledClass.hueFunctions[1].name);
        Assert.AreEqual("text", compiledClass.hueFunctions[1].type);
        Assert.AreEqual(null, compiledClass.hueFunctions[1].parameters);
      }

      [Test]
      public void simpleObjectVoidFunctionWithParameters()
      {
        Assert.AreEqual("setAge", compiledClass.hueFunctions[2].name);
        Assert.AreEqual(null, compiledClass.hueFunctions[2].type);

        Assert.AreEqual("age", compiledClass.hueFunctions[2].parameters[0].name);
        Assert.AreEqual("number", compiledClass.hueFunctions[2].parameters[0].type);
      }

      [Test]
      public void simpleObjectFunctionWithParameters()
      {
        Assert.AreEqual("setPerson", compiledClass.hueFunctions[3].name);
        Assert.AreEqual("person", compiledClass.hueFunctions[3].type);

        Assert.AreEqual("firstName", compiledClass.hueFunctions[3].parameters[0].name);
        Assert.AreEqual("text", compiledClass.hueFunctions[3].parameters[0].type);
        Assert.AreEqual("lastName", compiledClass.hueFunctions[3].parameters[1].name);
        Assert.AreEqual("text", compiledClass.hueFunctions[3].parameters[1].type);
        Assert.AreEqual("age", compiledClass.hueFunctions[3].parameters[2].name);
        Assert.AreEqual("number", compiledClass.hueFunctions[3].parameters[2].type);
      }
     
    }
}
