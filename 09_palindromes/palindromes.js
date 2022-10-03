const palindromes = function (str) {
    var regularEx = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(regularEx, '');

    var reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
}
// Do not edit below this line
module.exports = palindromes;
