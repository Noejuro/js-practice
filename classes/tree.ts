interface INode {
    key: number,
    value: string,
    left: INode,
    right: INode,
}
    

export default class Tree {

    binarySearch(head: INode, keyToSearch: number = 0, result: INode = null): INode {
        
        if(head.key === keyToSearch) {
            result = head;
            return result;
        }
        else {
            if(result === null && head.left !== undefined) {
                result = this.binarySearch(head.left, keyToSearch, result);
            }
            if(result === null && head.right !== undefined) {
                result = this.binarySearch(head.right, keyToSearch, result);
            }
        }

        return result;
    }
}