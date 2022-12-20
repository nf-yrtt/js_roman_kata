import {
    numberToRoman,
    romanToNumber,
  } from "./roman";

  describe("numberToRoman", () => {
    test("Test for individual roman symbols 1,5,10,50,100,500,1000", () => {
      expect(numberToRoman(1)).toBe("I");
      expect(numberToRoman(5)).toBe("V");
      expect(numberToRoman(10)).toBe("X");
      expect(numberToRoman(50)).toBe("L");
      expect(numberToRoman(100)).toBe("C");
      expect(numberToRoman(500)).toBe("D");
      expect(numberToRoman(1000)).toBe("M");
    });

    test("Test for additive roman numerals 2,3,20,30,20,300", () => {
      expect(numberToRoman(2)).toBe("II");
      expect(numberToRoman(3)).toBe("III");
      expect(numberToRoman(20)).toBe("XX");
      expect(numberToRoman(30)).toBe("XXX");
      expect(numberToRoman(200)).toBe("CC");
      expect(numberToRoman(300)).toBe("CCC");
    });  

  });

  describe("romanToNumber", () => {
    test("", () => {
      expect(romanToNumber()).toBe("");
    });  
  });