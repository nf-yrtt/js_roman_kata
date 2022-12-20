import {
    numberToRoman,
    romanToNumber,
  } from "./roman";

  describe("numberToRoman", () => {
    test("Test for individual roman symbols", () => {
      expect(numberToRoman(1)).toBe("I");
      expect(numberToRoman(5)).toBe("V");
      expect(numberToRoman(10)).toBe("X");
      expect(numberToRoman(50)).toBe("L");
      expect(numberToRoman(100)).toBe("C");
      expect(numberToRoman(500)).toBe("D");
      expect(numberToRoman(1000)).toBe("M");
    });

    test("Test for multiple strings of roman numerals", () => {
      expect(numberToRoman(2)).toBe("II");
      // expect(numberToRoman(3)).toBe("V");
      // expect(numberToRoman(10)).toBe("X");
      // expect(numberToRoman(50)).toBe("L");
      // expect(numberToRoman(100)).toBe("C");
      // expect(numberToRoman(500)).toBe("D");
      // expect(numberToRoman(1000)).toBe("M");
    });  

  });

  describe("romanToNumber", () => {
    test("", () => {
      expect(romanToNumber()).toBe("");
    });  
  });