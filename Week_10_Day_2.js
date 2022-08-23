class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    // add nodes to the back of the queue
    enqueue(node) {
        if(this.front === null){
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
    }

    // remove from the front
    dequeue() {
        if(this.front === null){
            return null
        }
        if(this.front.next === null){
            var temp = this.front;
            this.front = null;
            this.back = null;
            return temp;
        }
        var temp = this.front;
        this.front = temp.next;
        temp.next = null;
        return temp;
    }

    // check the front of the queue
    peek() {
        return this.front;
    }

    // return true / false if queue is empty
    isEmpty() {
        return this.front === null
    }

    // // return length
    count() {
        if(this.front === null){
            return 0;
        }
        if(this.front === this.back){
            return 1;
        }
        var count = 0;
        var tempQ = new Queue();

        while(this.front !== null){
            var tempNode = this.dequeue();
            tempQ.enqueue(tempNode);
            count ++
        }

        // re-make the original queue in the original queue (the "this")
        while(tempQ.front !== null){
            this.enqueue(tempQ.dequeue());
        }

        return count;
    }
}

// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
function readQueue(queue) {
    
}