export default class LargestSubstring {
    get(input) {
        let temp = input[0];
        let substrings = [];
        let result = '';
        for (let index = 1; index < input.length; index++) {
            if (input[index] !== input[index - 1]) {
                temp += input[index];
            }
            else {
                substrings.push(temp);
                temp = '';
            }
        }
        return substrings;
    }
    getA(input) {
        let substrings = [];
        let maxLength = Math.floor(input.length / 2);
        do {
            maxLength--;
            if (maxLength <= 1) {
                break;
            }
        } while (true);
        return;
    }
}