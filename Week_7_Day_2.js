class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() { 
        return this.head === null ? true : false
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // add given node to the head
    // list is empty?
    // list already has nodes?
    addToFront(node) {
        if(this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    
    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        var node = new Node(data);
        this.addToFront(node);
    }
}

// instantiate the SLL
var myCoolSLL = new SLL(); //
console.log(myCoolSLL);
// console.log(myCoolSLL.isEmpty());
// creating nodes
var myNode = new Node(55);

// executing methods:
myCoolSLL.addToFront(new Node(55));
myCoolSLL.addToFront(new Node(100));

// myCoolSLL.addToFront(new Node(44));
myCoolSLL.addDataToFront(44);
// myCoolSLL.addToFront(new Node(33));
myCoolSLL.addDataToFront(33);
myCoolSLL.addToFront(new Node(22));
// myCoolSLL.addDataToFront(22);
console.log(myCoolSLL);
