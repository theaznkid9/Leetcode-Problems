/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = true;
    let closers = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            closers = ')' + closers;
            count++;
            continue;
        } else if (s[i] === '{') {
            closers = '}' + closers;
            count++;
            continue;
        } else if (s[i] === '[') {
            closers = ']' + closers;
            count++;
            continue;
        } else if (s[i] !== closers[0]) {
            result = false;
            break;
        } else if (s[i] === closers[0]) {
            closers = closers.substring(1);
            count--;
        }
    }
    if (count !== 0) {
        return false;
    }
    return result;
};