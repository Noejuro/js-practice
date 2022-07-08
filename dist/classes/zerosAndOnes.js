export default class ZerosAndOnes {
    getNewArray(numbers) {
        let result = [];
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index] === 0) {
                result.unshift(0);
            }
            else {
                result.push(1);
            }
        }
        return result;
    }
    getNewArrayB(numbers) {
        let ones = [];
        let zeros = [];
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index] === 1) {
                ones.push(1);
            }
            else {
                zeros.push(0);
            }
        }
        return [...zeros, ...ones];
    }
    quickSort(numbers, left = 0, right = numbers.length - 1) {
        if (left < right) {
            const pivot = this.partition(numbers, left, right);
            this.quickSort(numbers, left, pivot - 1);
            this.quickSort(numbers, pivot + 1, right);
        }
        return numbers;
    }
    partition(arr, left, right) {
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
    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    quickSortB(numbers) {
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
