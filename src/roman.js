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
    const notSubtractiveNorAdditive = new Map([
        [5, 'V'],
        [50, 'L'],
        [500, 'D'],
    ]);

    //Invalid input handling
    if (!Number.isInteger(number) || number <= 0 || number >= 4000) {
        return "";
    }

    //Is equivalent to one of the roman numeral symbols
    if (numeralMap.has(number)) {
        return numeralMap.get(number);
    }
    else {
        const keys = [...numeralMap.keys()];
        let higher = keys[1];
        let lower = keys[0];
        let subAddLower = keys[0];
        if (number < Math.max(...keys)) {
            for (let i = 0; i < keys.length; i++) {
                if (number < keys[i]) {
                    higher = keys[i];
                    if (i > 0) {
                        lower = keys[i - 1];
                        subAddLower = lower;
                        if (notSubtractiveNorAdditive.has(lower) && i > 1) {
                            subAddLower = keys[i - 2];
                        }
                    }
                    break;
                }
            }
        } else {
            higher = lower = subAddLower = keys[6];
        }

        // Decide which additive or subtractive number to go with
        const toRet = new Map([
            [subAddLower * 2, numeralMap.get(subAddLower).repeat(2)],
            [subAddLower * 3, numeralMap.get(subAddLower).repeat(3)],
            [higher - subAddLower, `${numeralMap.get(subAddLower)}${numeralMap.get(higher)}`],
            [lower, numeralMap.get(lower)],
        ]);

        if (toRet.has(number)) {
            return toRet.get(number);
        } else {
            let filteredToRetKey = Math.max(...[...toRet.keys()].filter(num => num < number));
            return `${toRet.get(filteredToRetKey)}${numberToRoman(number - filteredToRetKey)}`;
        }
    }
};

/**
 * This function takes a roman numeral string and returns it as a number,
 * @param {String} roman
 * @returns {Number}
 */
export const romanToNumber = roman => {
    return -1;
};