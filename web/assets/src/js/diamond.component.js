/*

 - LETTER: 'D':

    A
   B B
  C   C
 D     D
  C   C
   B B
    A


 - spaces between letters in each row:

    A => 0 = 2*0 - 1 -> 0
    B => 1 = 2*1 - 1
    C => 3 = 2*2 - 1
    D => 5 = 2*3 - 1

 - spaces before the first letter in each row:

    A B C [D]
    3 2 1  0

    A => 3 = D - A
    B => 2 = D - B
    C => 1 = D - C
    D => 0 = D - D

 */

const diamond = function (letter = 'C') {

    const _letter = letter;
    const MIN_LETTER = 65;  // code for the lower letter allowed

    const addSpace = function (idx) {
        if (idx < 1) return '';
        return ' ' + addSpace(idx - 1);
    };

    const row = function (letter) {
        const letterPosition = letter.charCodeAt() - MIN_LETTER;
        if (letterPosition === 0) return letter;
        return letter + addSpace(2 * letterPosition - 1) + letter;
    };

    const leftSpaces = function (letter) {
        return addSpace(_letter.charCodeAt() - letter.charCodeAt());
    };

    const composeBotDiamond = function (letter, arr = []) {
        const idx = letter.charCodeAt();
        if (idx < MIN_LETTER) return arr;

        arr.push(leftSpaces(letter) + row(letter));
        return composeBotDiamond(String.fromCharCode(idx - 1), arr);
    };

    const render = function () {
        if (_letter.charCodeAt() === MIN_LETTER) return _letter;

        const botDiamond = composeBotDiamond(_letter);
        const topDiamond = botDiamond.slice(-(botDiamond.length - 1)).reverse();
        return topDiamond.join('\n') + '\n' + botDiamond.join('\n');
    };

    return {row, leftSpaces, render};
};

export default diamond;
