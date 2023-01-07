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

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        if (this.head === null) {
            return 0;
        }
        if (this.head === this.tail) {
            return 1;
        }

        let count = 1;
        let runner = this.head;
        while (runner !== null) {
            if (runner.next !== null) {
                count++;
            }
            runner = runner.next;
        }

        return count;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.tail === null) {
            this.tail = node;
            this.head = node;
        } else {
            let runner = this.tail;
            runner.next = node;
            node.previous = runner;
            this.tail = node;
        }
    }

    // pop from head
    removeHead() {
        if (this.head === null) {
            return null;
        } else {
            let runner = this.head;
            this.head = runner.next;
            if (this.head === null) {
                this.tail = null;
                return runner;
            } else {
                runner.next = null;
                this.head.previous = null;
                return runner;
            }
        }
    }
}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?