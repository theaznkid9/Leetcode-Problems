/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1, 1];
    }
    let currentRow = 2;
    let currentArray = [1, 2, 1];
    const helper = (array) => {
        if (currentRow === rowIndex) {
            return;
        }
        let newArray = [1];
        for (let i = 1; i < array.length; i++) {
            if (i === array.length - 1) {
                newArray.push(array[i] + array[i - 1]);
                newArray.push(1);
            } else {
                newArray.push(array[i] + array[i - 1]);
            }
        }
        currentArray = newArray;
        currentRow++;
        helper(currentArray);
    }
    helper(currentArray);
    return currentArray;
};