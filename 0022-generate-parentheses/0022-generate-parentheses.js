/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let results = [];
    let helper = (string, x, y) => {
        if (y === n) {
            results.push(string);
            return;
        }
        if (x === y) {
            let current = string + '(';
            helper(current, x + 1, y)
        }
        if (x > y && x !== n) {
            let option1 = string + '(';
            let option2 = string + ')';
            helper(option1, x + 1, y);
            helper(option2, x, y + 1);
        }
        if (x > y && x === n) {
            let option = string + ')';
            helper(option, x, y + 1);
        }
    }
    helper('', 0, 0);
    return results;
};