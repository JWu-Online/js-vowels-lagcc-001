'use strict';

var isAVowel = function(lttr){
  // your code goes here
if (typeof lttr === 'string' && lttr.length === 1) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(lttr.toLowerCase());
} else {
  return false;
}
};

module.exports = isAVowel;
