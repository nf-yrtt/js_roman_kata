/**
 * This function takes a positive integer and returns the number in Roman numerals,
 * @param {Number} number
 * @returns {String}
 */
export const numberToRoman = number => {
    const numeralMap = new Map([
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M'],
      ]); 
      return (numeralMap.get(number));
};


/**
 * This function takes a roman numeral string and returns it as a number,
 * @param {String} roman
 * @returns {Number}
 */
export const romanToNumber = roman => {
    return -1;
};