export default class LargestSubstring {
    get(input: string): string {
        let maxLength = Math.floor(input.length / 2);
        let temp = input.substring(0, maxLength);
        let result = '';
        let maxCount = 0;

        do {
            let inputTemp = 0;
            let count = 0;

            for(let index = 0; index < input.length; index++) {
                if(input[index] === temp[inputTemp]) {
                    if(inputTemp < temp.length - 1) {
                        inputTemp++;
                    }
                    else {
                        count++;
                        inputTemp = 0;
                    }
                }
                else {
                    inputTemp = 0;
                    if(input[index] === temp[inputTemp]) {
                        inputTemp++;
                    }
                }

                if(count > 1) {
                    if(count > maxCount) {
                        maxCount = count;
                        result = temp;
                    }
                    break;
                }
            }

            maxLength--;
            temp = input.substring(0, maxLength);

            if(maxLength <= 1) {
                break;
            }
        }while(true)

        return result;
    }
}