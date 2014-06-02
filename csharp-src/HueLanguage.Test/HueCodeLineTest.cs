using System;
using System.Runtime.CompilerServices;
using NUnit.Framework;

using HueLanguage.Core;
namespace HueLanguage.Test
{
  public class HueLineTest
  {
    [Test]
    public void CodeLineWordParse()
    {
      var codeLine = new HueLine(1, 0, "var (x == 2)");

      Assert.AreEqual(6, codeLine.words.Count);
      Assert.AreEqual("var", codeLine.words[0]);
      Assert.AreEqual("(", codeLine.words[1]);
      Assert.AreEqual("x", codeLine.words[2]);
      Assert.AreEqual("==", codeLine.words[3]);
      Assert.AreEqual("2", codeLine.words[4]);
      Assert.AreEqual(")", codeLine.words[5]);
    }

    [Test]
    public void CodeLineWordParseWithIdent()
    {
      var codeLine = new HueLine(1, 0, "  var (x == 2)");

      Assert.AreEqual(6, codeLine.words.Count);
      Assert.AreEqual("var", codeLine.words[0]);
      Assert.AreEqual("(", codeLine.words[1]);
      Assert.AreEqual("x", codeLine.words[2]);
      Assert.AreEqual("==", codeLine.words[3]);
      Assert.AreEqual("2", codeLine.words[4]);
      Assert.AreEqual(")", codeLine.words[5]);
    }
  }
}
