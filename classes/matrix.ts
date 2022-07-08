type TMatrix = Array<number[]>;

export default class Matrix {
    a: TMatrix = [];

    constructor(a: TMatrix) {
        this.a = a;
    }

    sum(other: Matrix): Matrix {
        const size: number = this.a.length;
        let result: TMatrix = Array.from(Array(size), () => []);

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {

                result[i][j] = this.a[i][j] + other.a[i][j];

            }
        }

        return new Matrix(result);
    }

    multiplication(other: Matrix): Matrix {
        const size: number = this.a.length;
        let result: TMatrix = Array.from(Array(size), () => []);


        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                result[i][j] = 0;
                
                for (let k = 0; k < size; k++) {
                    result[i][j] += this.a[i][k] * other.a[k][j];
                }
            }
        }

        return new Matrix(result);
    }

    scalarMultiplication(scalar: number): Matrix {
        const size: number = this.a.length;
        let result: TMatrix = Array.from(Array(size), () => []);

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {

                result[i][j] = this.a[i][j] * scalar;

            }
        }

        return new Matrix(result);
    }

    asString() {
        return JSON.stringify(this.a);
    }
}