export default class SortArray {
    sort(numbers, left = 0, right = numbers.length - 1) {
        if (left < right) {
            const pivot = this.partition(numbers, left, right);
            this.sort(numbers, left, pivot - 1);
            this.sort(numbers, pivot + 1, right);
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
    sortB(numbers) {
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
        return [...this.sortB(left), pivot, ...this.sortB(right)];
    }
}
