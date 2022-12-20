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
    if ( !Number.isInteger(number) || number <= 0){
        return "";
    }

    //Is a roman numeral
    if (numeralMap.has(number)) {
        return numeralMap.get(number);
    }
    else {
        const keys = [...numeralMap.keys()];
        let higher = keys[1];
        let lower = keys[0];

        for (let i = 0; i < keys.length; i++) {
            if (number < keys[i]) {
                higher = keys[i];
                if (i > 0) {
                    lower = keys[i - 1];
                    if (notSubtractiveNorAdditive.has(lower) && i > 1) {
                        lower = keys[i - 2];
                    }
                }
                break;
            }

        }


        //Additive
        for (let i = 2; i < 4; i++) {
            if (number === i * lower) {
                return numeralMap.get(lower).repeat(i);
            }
        }

        //Subtractive
        if (higher - lower === number) {
            return `${numeralMap.get(lower)}${numeralMap.get(higher)}`;
        }

        return "-1";
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