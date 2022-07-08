export default class Tree {
    binarySearch(head, keyToSearch = 0, result = null) {
        if (head.key === keyToSearch) {
            result = head;
            return result;
        }
        else {
            if (result === null && head.left !== undefined) {
                result = this.binarySearch(head.left, keyToSearch, result);
            }
            if (result === null && head.right !== undefined) {
                result = this.binarySearch(head.right, keyToSearch, result);
            }
        }
        return result;
    }
}
