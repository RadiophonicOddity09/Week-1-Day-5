function isPalindrome(s) {
    s = s.split(" ").join("");
   var stringReverse = s.splt("").reverse().join("");
   return s === stringReverse;
}

module.exports = isPalindrome;
