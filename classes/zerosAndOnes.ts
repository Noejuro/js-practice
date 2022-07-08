export default class ZerosAndOnes {
    getNewArray(numbers: number[]): number[] {
        let result = [];
        for(let index = 0; index < numbers.length; index ++) {
            if(numbers[index] === 0) {
                result.unshift(0);
            }
            else {
                result.push(1);
            }
        }
        return result;
    }

    getNewArrayB(numbers: number[]): number[] {
        let ones = [];
        let zeros = [];
        for(let index = 0; index < numbers.length; index ++) {
            if(numbers[index] === 1) {
                ones.push(1);
            }
            else {
                zeros.push(0);
            }
        }
        return [...zeros, ...ones];
    }

    quickSort(numbers: number[], left: number = 0, right: number = numbers.length - 1): number[] {

        if (left < right) {
            const pivot = this.partition(numbers, left, right);
            this.quickSort(numbers, left, pivot - 1);
            this.quickSort(numbers, pivot + 1, right);
        }

        return numbers;
    }

    private partition(arr: number[], left: number, right: number) {
        const pivot = arr[right];
        let i = left;

        for (let j = left; j < right; j++) {

          if (arr[j] < pivot) {
            this.swap(arr, i, j);
            i++;
          }

        }

        this.swap(arr, i, right);
        return i;
    }

    private swap(arr: number[], i: number, j: number) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    quickSortB(numbers: number[]): number[] {
        if (numbers.length < 2) {
            return numbers;
        }

        let pivot = numbers[numbers.length - 1];
        let left = [];
        let right = [];

        for (let i = 0; i < numbers.length - 1; i++) {

            if (numbers[i] < pivot) {
                left.push(numbers[i]);
            } 
            else {
                right.push(numbers[i]);
            }

        }
        return [...this.quickSortB(left), pivot, ...this.quickSortB(right)];
    }
}