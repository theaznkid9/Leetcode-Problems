/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }
    let iteration = 1;
    let result = '1';
    let helper = (num) => {
        if (iteration === n) {
            return;
        }
        let currentString = '';
        let current = num[0];
        let repeats = 1;
        if (num === '1') {
            currentString = '11';
        } else {
            for (let i = 1; i < num.length; i++) {
                if (num[i] === current) {
                    repeats++;
                }
                if (num[i] !== current) {
                    currentString = currentString + repeats + current;
                    current = num[i];
                    repeats = 1;
                }
                if (i === num.length - 1) {
                    currentString = currentString + repeats + current;
                }
            }
        }
        iteration++;
        result = currentString;
        helper(currentString);
    }
    helper('1');
    return result;
};