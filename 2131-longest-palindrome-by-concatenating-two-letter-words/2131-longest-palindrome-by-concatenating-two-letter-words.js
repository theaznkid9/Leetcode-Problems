/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let singleDouble = false;
    let maxLength = 0;
    let wordsObj = {};
    for (let i = 0; i < words.length; i++) {
        wordsObj[words[i]] = (wordsObj[words[i]] || 0) + 1;
    }
    for (let key in wordsObj) {
        if (key === key[1] + key[0]) {
            let temp = Math.floor(wordsObj[key]/2);
            maxLength = maxLength + (temp * 4);
            if (wordsObj[key] % 2 === 1 && !singleDouble) {
                maxLength = maxLength + 2;
                singleDouble = true;
            }
            continue;
        }
        if (wordsObj[key[1] + key[0]]) {
            let temp = Math.min(wordsObj[key], wordsObj[key[1] + key[0]]);
            maxLength = maxLength + (temp * 4);
            wordsObj[key[1] + key[0]] = 0;
        }
    }
    return maxLength;
};