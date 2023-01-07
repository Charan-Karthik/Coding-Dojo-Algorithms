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
        if(this.head === null){
            this.head = node;
            this.tail = node;
        } else {
            let runner = this.head;
            runner.previous = node;
            node.next = runner;
            this.head = node;
        }
    }

    prepend(node, target){
        runner = this.head;
        if (runner === null) {
            return null;
        }

        while (runner.value !== target) {
            runner = runner.next;
            if (runner === null) {
                return null;
            }
        }

        if (runner = this.head) {
            node.next = runner;
            this.head = node;
            runner.previous = node
        }
        else {
            let previous = runner.previous;
            node.next = runner;
            node.previous = previous;
            runner.previous = node;
            previous.next = node;
        }

        return this;
    }
}

