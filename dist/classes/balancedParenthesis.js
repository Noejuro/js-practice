export default class BalancedParenthesis {
    validate(sentence) {
        if (sentence[0] !== '(') {
            return false;
        }
        const count = this.getCount(sentence);
        if (count === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    getCount(sentence) {
        let count = 0;
        for (let char of sentence) {
            if (char === '(') {
                count++;
            }
            else if (char === ')') {
                count--;
            }
            if (count === -1) {
                return -1;
            }
        }
        return count;
    }
}
