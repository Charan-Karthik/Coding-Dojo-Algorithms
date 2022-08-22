/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


var pringlesTube = new slStack();
console.log(pringlesTube); // slStack { top: null }
pringlesTube.push(new Node(11));
console.log(pringlesTube); // slStack { top: Node {data: 11, next: null} }

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
    }

    // add to top
    push(newNode) {
        newNode.next = this.top;
        this.top = newNode;
    }

    // remove from top
    pop() {
        if(this.top === null){
            return null;
        }
        var removedNode = this.top;
        this.top = removedNode.next;
        // edge case for if there's only one node in the stack; technically not needed, but saved a redunant reassignment
        if(removedNode.next !== null){
            removedNode.next = null;
        }
        return removedNode;
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        if(this.top === null){
            return 0;
        }
        if(this.top.next === null){
            return 1;
        }

        var tempStack = new slStack();
        while(this.top !== null){
            var nodeToTransfer = this.pop();
            tempStack.push(nodeToTransfer);
        }
        var count = 0;
        while(this.top !== null){
            var tempNode = tempStack.pop();
            this.push(tempNode);
            count ++;
        }
        return count;
    }
}

// don't forget to instantiate the slStack!
// add a few nodes first