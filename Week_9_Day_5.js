// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a this.head and this.tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // push to head
    // myDll.addHead(new DLLNode(33));
    // push to head
    addHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            let runner = this.head;
            runner.previous = node;
            node.next = runner;
            this.head = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.tail === null) {
            return null
        } else {
            let runner = this.tail;
            this.tail = runner.previous;
            if (this.tail === null) {
                this.head = null;
                return runner;
            } else {
                runner.previous = null;
                this.tail.next = null;
                return runner;
            }
        }
    }

    isPalindrome() {
        if (this.head === null && this.tail === null) {
            return false;
        }

        let left = this.head;
        let right = this.tail;

        while (left !== right) {
            if (left.value !== right.value) {
                return false;
            } else if (left.next === right) {
                if (right.value === left.value) {
                    break;
                } else {
                    return false;
                }
            } else {
                left = left.next;
                right = right.previous;
            }
        }

        return true;
    }

    // not as efficient because it goes through the entire DLL instead of stopping in the middle
    isPalindromeV2() {
        if (this.head === null) {
            return false;
        }

        let left = this.head;
        let right = this.tail;

        while (left.value === right.value) {
            left = left.next;
            right = right.previous;

            if (left === null) {
                return true;
            }
        }

        return false;
    }
}