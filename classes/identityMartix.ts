export default class IdentityMatrix {
    generateMatrix(num: number): Array<number[]> {
        let result = Array.from(Array(num), () => []);;
        for(let i = 0; i < num; i++) {
            for(let j = 0; j < num; j++) {
                if(i === j) {
                    result[i][j] = 1;
                }
                else {
                    result[i][j] = 0;
                }
            }   
        }
        return result;
    }
}