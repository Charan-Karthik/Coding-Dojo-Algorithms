class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// SLL
// - add (to head... append, prepend, tail)
// - remove (from head, by value... tail)
// - read (print all, count)
// - search (contains)
// - isEmpty

class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // if the linked list has a second to last value, print it
    // return nothing
    //                                       r
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) ->
    // print: 7
    printSecondToLastValue() {
        if(this.head === null){
            return "Empty SLL";
        }

        var runner = this.head;
        if(runner.next === null){
            return "List is not long enough to have a second to last node";
        }

        while(runner.next.next !== null){
            runner = runner.next;
        }
        console.log(runner.value);
    }

    // bonus: print nth to last
    // if the link list has a nth to last value, print it
    // return nothing
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) -> (4) -> (19) -> (30) ->
    //        n = 4
    // print: 9
    // hint - use 2 runners 
    printNthToLast(n) {
        if(this.head === null){
            return "Empty SLL";
        }

        var runner = this.head;
        var runner2 = this.head;
        for(var i=0; i<n; i++){
            if(runner.next === null){
                return "List is less than " + n + " nodes long";
            }
            runner = runner.next;
        }

        while(runner.next){
            runner2 = runner2.next;
            runner = runner.next;
        }

        console.log(runner2.value);
    }

    // reverse linked list in place
    // ** you may not swap values between nodes **
    // input:  head -> (1) -> (2) -> (3) ->
    // output: head -> (3) -> (2) -> (1) ->
    reverse() {
        if(this.head === null){
            return "Empty SLL";
        }

        var previous = null;
        var runner = this.head;
        if(runner.next === null){
            return "Nothing to reverse";
        }
        var next = runner.next;

        while(runner){
            runner.next = previous;
            previous = runner;
            runner = next;
            if(next !== null) {
                next = next.next;
            }
            this.head = previous;
        }
    }

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head; // set current as the head, if it exists or not
        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;
        // while we have a runner
        while (runner) {
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }
        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
        this.size --;
        return removed;
    }

    // return true or false if this.head is null
    /**
     * Determines if this list is empty.
     * - Time: O(1).
     * - Space: O(1).
     * returns {boolean}
     */
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
        this.size ++;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: O(1).
     * - Space: O(?).
     * param {any} data The data for the new node.
     * returns {SinglyLinkedList} This list.
     */
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
        this.size ++;
    }

    // if data is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the data
    delete(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                this.size--;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }

        return "Data to be deleted is not in SLL";
    }

    // return the size of the current linked list
    size() {
        if (this.head === null){
            return "Empty list";
        }
        var runner = this.head;
        var size = 0;
        while(runner){
            size ++;
            runner = runner.next;
        }
        return size;
    }
    // BONUS: how might you do this without linearly traversing the list? O(1)
    // you may have to change other methods within this class
    // To find size with complexity of O(1), add something like "this.size = 0" to the SLL constructor, and then whenever a new node is added, increment the size by 1 (and whenver a node is removed, decrement the size by 1)
    // Code snippets for size are included above
}

// Don't forget to instantiate the SLL!
// and add a few nodes first!
// write your test-cases