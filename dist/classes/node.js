export default class Tree {
    binarySearch(head, keyToSearch = 0, result = null) {
        if (head.key === keyToSearch) {
            result = head;
            return;
        }
        else {
            if (result !== null && head.left !== null) {
                this.binarySearch(head.left, keyToSearch, result);
            }
            if (result !== null && head.right !== null) {
                this.binarySearch(head.right, keyToSearch, result);
            }
        }
        return result;
    }
}
