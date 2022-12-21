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
        // Find the higher symbol, lower symbol and the subtractive or 
        // additive lower symbol if the lower symbol is not subtractive or additive
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
export const romanToNumber = romanNumber => {
    const simpleNotRomanRegex = /[^IVXLCDM]+/;

    if (!(typeof (romanNumber) === "string") || simpleNotRomanRegex.test(romanNumber) || romanNumber === "") {
        return 0;
    }

    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    const notSubtractiveNorAdditive = new Map([
        ['V', 5],
        ['L', 50],
        ['D', 500],
    ]);

    const subtractiveAdditive = new Map([
        ["I", 1],
        ["X", 10],
        ["C", 100],
        ["M", 1000],
    ]);

    const notSubAddKeys = [...notSubtractiveNorAdditive.keys()];
    for (let i = 0; i < notSubAddKeys.length; i++) {
        if (romanNumber.includes(notSubAddKeys[i].repeat(2))) {
            return 0;
        }
    }

    const subAddKeys = [...subtractiveAdditive.keys()];
    for (let i = 0; i < subAddKeys.length; i++) {
        if (romanNumber.includes(subAddKeys[i].repeat(4))) {
            return 0;
        }
    }

    const romanNumberAr = [...romanNumber];
    let decimalNumber = 0;
    let previousSymbol = "";
    for (let i = 0; i < romanNumberAr.length; i++) {
        let currentSymbol = romanNumberAr[i];
        decimalNumber += romanMap.get(currentSymbol);
        if(romanMap.has(previousSymbol) && romanMap.get(currentSymbol) > romanMap.get(previousSymbol) ){
            //Found a subtractive pair
            decimalNumber = decimalNumber - (2 * romanMap.get(previousSymbol));            
        }
        previousSymbol = currentSymbol;
    }

    return decimalNumber;
};