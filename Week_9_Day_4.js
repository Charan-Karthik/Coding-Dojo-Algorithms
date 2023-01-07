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

    // pop from tail
    removeTail() {
        if(this.tail === null){
            return null
        } else {
            let runner = this.tail;
            this.tail = runner.previous;
            if(this.tail === null){
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
        if(this.head === null){
            return 0;
        }
        if(this.head === this.tail){
            return 1;
        }

        let count = 1;
        let runner = this.head;
        while(runner !== null){
            if(runner.next !== null){
                count ++;
            }
            runner = runner.next;
        }

        return count;
    }

    exists(val){
        let runner = this.head;
        if (runner === null){
            return false;
        }

        while (runner.value !== val){
            runner = runner.next;
            if(runner === null){
                return false
            }
        }

        return true;
    }
}
