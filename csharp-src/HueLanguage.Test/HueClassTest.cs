using System;
using System.Runtime.CompilerServices;
using HueLanguage.Core;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace HueLanguage.Test
{
    [TestClass]
    public class HueClassTest
    {
        [TestMethod]
        public void ClassWithInvalidCharacters()
        {
            try
            {
                var hueClass = new HueClass("1class", "objeto");

                Assert.Fail("should throw error");
            }
            catch (HueException e)
            {
                Assert.IsTrue(e.number == 2);
                Assert.IsTrue(e.message == "nome de classe inválido, utilize apenas letras e números sem espaço");
            }
        }

        [TestMethod]
        public void ClassWithInvalidCharacters2()
        {
            try
            {
                var hueClass = new HueClass("test class", "objeto");

                Assert.Fail("should throw error");
            }
            catch (HueException e)
            {
                Assert.IsTrue(e.number == 2);
                Assert.IsTrue(e.message == "nome de classe inválido, utilize apenas letras e números sem espaço");
            }
        }

        [TestMethod]
        public void ClassWithValidName()
        {
            var hueClass = new HueClass("testclass", "objeto");
            Assert.IsTrue(hueClass.name == "testclass");
        }

        [TestMethod]
        public void ClassWithValidType()
        {
            var hueClass1 = new HueClass("testclass", "objeto");
            Assert.IsTrue(hueClass1.type == "objeto");

            var hueClass2 = new HueClass("testclass", "abstrato");
            Assert.IsTrue(hueClass2.type == "abstrato");

            var hueClass3 = new HueClass("testclass", "interface");
            Assert.IsTrue(hueClass3.type == "interface");
        }

        [TestMethod]
        public void ClassWithInvalidType()
        {
            try
            {
                var hueClass1 = new HueClass("testclass", "invalidtype");

                Assert.Fail("should throw error");
            }
            catch (HueException e)
            {
                Assert.IsTrue(e.number == 3);
                Assert.IsTrue(e.message == "tipo de classe inválido, existe apenas: objeto, abstrato ou interface");
            }
        }


    }
}
