export default class LargestSubstring {
    get(input: string): string[] {
        let temp: string = input[0];
        let substrings: string[] = [];
        let result: string = '';

        for(let index = 1; index < input.length; index++) {
            if(input[index] !== input[index - 1]) {
                temp += input[index];
            }
            else {
                substrings.push(temp);
                temp = '';
            }
        }

        return substrings;
    }

    getA(input: string): string[] {
        let substrings = [];
        let maxLength = Math.floor(input.length / 2);

        do {
            maxLength--;
            if(maxLength <= 1) {
                break;
            }
        }while(true)

        return
    }
}