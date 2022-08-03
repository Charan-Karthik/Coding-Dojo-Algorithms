class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//🐸

class SLL {
    constructor() {
        this.head = null;
    }
    // return true or false if this.head is null
    isEmpty() {
        return this.head === null;
    }

    // add given node to the head, if it exists. return void
    addToFront(someNode) {
        if (this.head === null) {
            this.head = someNode;
        } else {
            someNode.next = this.head;
            this.head = someNode;
        }
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
        return this; // return back the instance so we can chain methods
    }

    // ---------------------------------
    // console log (print) the value of every node in the current list
    // traversal

    // mycoolList.read()
    read() {
        var runner = this.head;
        while(runner){
            console.log(runner.value);
            runner = runner.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;
        while(runner){
            if(runner.value === value){
                return true;
            } else {
                runner = runner.next;
            }
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if(this.head === null){
            return null;
        }
        var runner = this.head;
        this.head = runner.next;
        runner.next = null;

        return runner;
    }
}

// ⚠ 1. don't forget to instantiate the Singly Linked List
// ⚠ 2. add a few nodes
// ⚠ 3. write test cases