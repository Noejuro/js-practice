export default class Palindrome {
    validate(palindrome) {
        for (let index = 0; index < palindrome.length / 2; index++) {
            if (palindrome[index] !== palindrome[palindrome.length - index - 1]) {
                return false;
            }
        }
        return true;
    }
}
