export default class Occurrences {
    get(inputA: string, inputB: string): number {
        let result = 0;
        let inputBIndex = 0;

        for(let index = 0; index < inputA.length; index++) {
            if(inputA[index] === inputB[inputBIndex]) {
                if(inputBIndex < inputB.length - 1) {
                    inputBIndex++;
                }
                else {
                    result++;
                    inputBIndex = 0;
                }
            }
            else {
                inputBIndex = 0;
                if(inputA[index] === inputB[inputBIndex]) {
                    inputBIndex++;
                }
            }
        }

        return result;
    }
}