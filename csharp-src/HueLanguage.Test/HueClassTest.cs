using System;
using System.Runtime.CompilerServices;
using NUnit.Framework;

using HueLanguage.Core;

namespace HueLanguage.Test
{
   
    public class HueClassTest
    {
        [Test]
        public void ClassWithInvalidCharacters()
        {
            try
            {
                var hueClass = new HueClass("1class", "class");

                Assert.Fail("should throw error");
            }
            catch (HueException e)
            {
              Assert.AreEqual(2, e.number);
              Assert.AreEqual("invalid class name, only letters and numbers without spaces are allowed for class name", e.message);
            }
        }

        [Test]
        public void ClassWithInvalidCharacters2()
        {
            try
            {
                var hueClass = new HueClass("test class", "classe");

                Assert.Fail("should throw error");
            }
            catch (HueException e)
            {
              Assert.AreEqual(2, e.number);
              Assert.AreEqual("invalid class name, only letters and numbers without spaces are allowed for class name", e.message);
            }
        }

        [Test]
        public void ClassWithValidName()
        {
            var hueClass = new HueClass("testclass", "class");
            Assert.AreEqual("testclass", hueClass.name);
        }

        [Test]
        public void ClassWithValidType()
        {
            var hueClass1 = new HueClass("testclass", "class");
            Assert.AreEqual("class", hueClass1.type);

            var hueClass2 = new HueClass("testclass", "abstract");
            Assert.AreEqual("abstract", hueClass2.type);

            var hueClass3 = new HueClass("testclass", "interface");
            Assert.AreEqual("interface",hueClass3.type);
        }

        [Test]
        public void ClassWithInvalidType()
        {
            try
            {
                var hueClass1 = new HueClass("testclass", "invalidtype");

                Assert.Fail("should throw error");
            }
            catch (HueException e)
            {
                Assert.AreEqual(3,e.number);
                Assert.AreEqual("invalid class type, allowed types are: class, abstract or interface", e.message);
            }
        }


    }
}
