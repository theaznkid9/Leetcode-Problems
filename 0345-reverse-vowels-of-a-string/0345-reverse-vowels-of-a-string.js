/**
 * @param {string} s
 * @return {string}
 */
const vowelChecker = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        return true;
    } else {
        return false;
    }
}

var reverseVowels = function(s) {
    let vowels = [];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (vowelChecker(s[i])) {
            vowels.push(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (vowelChecker(s[i])) {
            result = result + vowels.pop();
        } else {
            result = result + s[i];
        }
    }
    return result;
};