class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    // coolSll.addToFront(new Node(123))
    addToFront(someNode) {
        // var temp = this.head;
        if (this.head === null) {
            this.head = someNode;
        } else {
            someNode.next = this.head;
            this.head = someNode;
        }
    }
    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { 
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
        return this; // return back the instance so we can chain methods
    }

    // console log (print) the data of every node in the current list
    // coolSll.read()
    read() {
        // console.log(this.head.next.data);
        // create a temp var to run through
        var runner = this.head;
        var size = 0;
        while (runner != null) {
            console.log(runner.data);
            // move runner
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

    // if data is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the data
    delete(data) {
        if(!this.head){
            return null;
        }
        
        var runner = this.head;
        if(runner.value === data){
            this.head = runner.next;
            runner.next = null;
            return runner;
        }

        while(runner.next.value !== data){
            runner = runner.next;
            if(!runner){
                return null;
            }
        }

        var temp = runner.next;
        runner.next = temp.next;
        temp.next = null;
        return temp;
    }

    // return the size of the current linked list
    // BONUS: how might you do this without linearly traversing the list? O(1)
    size() {
        if (this.head === null){
            return "Empty list"
        }
        var runner = this.head
        var size = 0
        while(runner){
            size ++
            runner = runner.next
        }
        return size
    }
}


// Don't forget to instantiate the SLL!
var coolSll = new SLL();


// (head) -> (33) -> (22) -> null
//            ^
//          runner