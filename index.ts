import BalancedParenthesis from "./classes/balancedParenthesis.js";
import ZerosAndOnes from "./classes/zerosAndOnes.js";
import IdentityMatrix from "./classes/identityMartix.js";
import TopRightMatrix from "./classes/topRightMatrix.js";
import Palindrome from "./classes/palindromes.js";
import Occurrences from "./classes/occurrences.js";
import LargestSubstring from "./classes/largestSubstring.js";
import SortArray from "./classes/sortArray.js";
import Fraction from "./classes/fraction.js";
import Tree from "./classes/tree.js";

// Question 1
const newBalancedParenthesis = new BalancedParenthesis();

// console.log(newBalancedParenthesis.validate('(74((1(4(1())22)30)'));
// console.log(newBalancedParenthesis.validate('(123()(100(8())32)1212)'));
// console.log(newBalancedParenthesis.validate('()'));
// console.log(newBalancedParenthesis.validate(')('));
// console.log(newBalancedParenthesis.validate('234()87987(1)'));

// Question 2
const newZerosAndOnes = new ZerosAndOnes();
const arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0];
// console.log(newZerosAndOnes.getNewArray(arr));
// console.log(newZerosAndOnes.getNewArrayB(arr));
// console.log(newZerosAndOnes.quickSortB(arr));

// Question 3
const newSortArray = new SortArray();
const arrSort = [100, 23, 237, 52, 43, 641, 503, 71];
// console.log(newSortArray.sort(arrSort));
// console.log(newSortArray.sortB(arrSort));

// Question 4
const newMatrix = new IdentityMatrix();
// console.log(newMatrix.generateMatrix(1));
// console.log(newMatrix.generateMatrix(2));
// console.log(newMatrix.generateMatrix(4));
// console.log(newMatrix.generateMatrix(5));
// console.log(newMatrix.generateMatrix(6));

// Question 5
const newTopRightMatrix = new TopRightMatrix();
// console.log(newTopRightMatrix.generateMatrix(1));
// console.log(newTopRightMatrix.generateMatrix(2));
// console.log(newTopRightMatrix.generateMatrix(4));
// console.log(newTopRightMatrix.generateMatrix(5));
// console.log(newTopRightMatrix.generateMatrix(6));

// Question 6
const a = new Fraction(1, 2);
const b = new Fraction(1, 6);
// console.log(a.sum(b).asString());
// console.log(a.multiplication(b).asString());
// console.log(a.division(b).asString());

// Question 7 - Still working on a solution

// Question 8
const newPalindrome = new Palindrome();
// console.log(newPalindrome.validate('asmiuotolotouimsa'));
// console.log(newPalindrome.validate('cat'));
// console.log(newPalindrome.validate('rotor'));
// console.log(newPalindrome.validate('rota'));
// console.log(newPalindrome.validate('aa'));
// console.log(newPalindrome.validate('ab'));
// console.log(newPalindrome.validate('a'));

// Question 9 - Still working on a solution
const newLargestSubstring = new LargestSubstring();
// console.log(newLargestSubstring.get('abcaabcbbaa'))

// Question 10
const newOccurrences = new Occurrences();
// console.log(newOccurrences.get('abcaabcbbaabcabababbabcacbabcab', 'abc'));


// Question 11
const newNode = new Tree();
const nodeA = { key: 2, value: 'ABC', left: undefined, right: undefined };
const nodeB = { key: 8, value: 'GHI', left: undefined, right: undefined };
const nodeC = { key: 10, value: 'JKL', left: nodeB, right: undefined };
const nodeD = { key: 5, value: 'DEF', left: nodeA, right: nodeC };

// console.log(newNode.binarySearch(nodeD, 10));

