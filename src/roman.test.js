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
      expect(numberToRoman(2000)).toBe("MM");
      expect(numberToRoman(3000)).toBe("MMM");

    });  

    test("Test for subtractive roman numerals 4,9,40,90,400", () => {
      expect(numberToRoman(4)).toBe("IV");
      expect(numberToRoman(9)).toBe("IX");
      expect(numberToRoman(40)).toBe("XL");
      expect(numberToRoman(90)).toBe("XC");
      expect(numberToRoman(400)).toBe("CD");
      expect(numberToRoman(900)).toBe("CM");
    });  

    test("Test for output with multiple numerals - additive", () => {
      expect(numberToRoman(6)).toBe("VI");
      expect(numberToRoman(7)).toBe("VII");
      expect(numberToRoman(8)).toBe("VIII");
      expect(numberToRoman(11)).toBe("XI");
      expect(numberToRoman(12)).toBe("XII");
      expect(numberToRoman(13)).toBe("XIII");
      expect(numberToRoman(16)).toBe("XVI");
      expect(numberToRoman(31)).toBe("XXXI");
      expect(numberToRoman(55)).toBe("LV");
      expect(numberToRoman(1501)).toBe("MDI");
      expect(numberToRoman(2700)).toBe("MMDCC");
      expect(numberToRoman(3552)).toBe("MMMDLII");      
    });  




    test("Test invalid numbers return empty", () => {
      expect(numberToRoman()).toBe("");
      expect(numberToRoman(0)).toBe("");
      expect(numberToRoman(-1)).toBe("");
      expect(numberToRoman(5.7)).toBe("");
      expect(numberToRoman("400")).toBe("");
      expect(numberToRoman("what")).toBe("");
    });  


  });

  describe("romanToNumber", () => {
    test("", () => {
      expect(romanToNumber()).toBe("");
    });  
  });