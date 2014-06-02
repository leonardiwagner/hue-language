using System;
using System.Runtime.Remoting;
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
        Assert.IsTrue(compiler.compiledClasses.Count == 1);
        compiledClass = compiler.compiledClasses[0];

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
        var function = compiledClass.hueFunctions[0];
        Assert.AreEqual("walk", function.name);
        Assert.AreEqual(null, function.type);
        Assert.AreEqual(null, function.parameters);

        Assert.AreEqual(1, function.codeBlock.Count);
      }

      [Test]
      public void simpleObjectFunctionWithoutParameters()
      {
        var function = compiledClass.hueFunctions[1];

        Assert.AreEqual("getName", function.name);
        Assert.AreEqual("text", function.type);
        Assert.AreEqual(null, function.parameters);

        Assert.AreEqual(2, function.codeBlock.Count);
      }

      [Test]
      public void simpleObjectVoidFunctionWithParameters()
      {
        var function = compiledClass.hueFunctions[2];

        Assert.AreEqual("setAge", function.name);
        Assert.AreEqual(null, function.type);

        Assert.AreEqual("age", function.parameters[0].name);
        Assert.AreEqual("number", function.parameters[0].type);

        Assert.AreEqual(1, function.codeBlock.Count);
      }

      [Test]
      public void simpleObjectFunctionWithParameters()
      {
        var function = compiledClass.hueFunctions[3];

        Assert.AreEqual("setPerson", function.name);
        Assert.AreEqual("person", function.type);

        Assert.AreEqual("firstName", function.parameters[0].name);
        Assert.AreEqual("text", function.parameters[0].type);
        Assert.AreEqual("lastName", function.parameters[1].name);
        Assert.AreEqual("text", function.parameters[1].type);
        Assert.AreEqual("age", function.parameters[2].name);
        Assert.AreEqual("number", function.parameters[2].type);

        Assert.AreEqual(3, function.codeBlock.Count);
      }
     
    }
}
