# Doubly Linked List Algorithm

class DLLNode:
    def __init__(self, data):
        self.data = data
        self.previous = None
        self.next = None

class DLList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def addHead(self, node):
        if self.head == None:
            self.head = node
            self.tail = node
        else:
            runner = self.head
            runner.previous = node
            node.next = runner
            self.head = node
        
        return self

    def removeTail(self):
        if self.tail == None:
            return None
        else:
            runner = self.tail
            self.tail = runner.previous
            if self.tail == None:
                self.head = None
                return runner
            else:
                runner.previous = None
                self.tail.next = None
                return runner
    
    def isEmpty(self):
        return self.head == None
    
    def size(self):
        if self.head == None:
            return 0
        if self.head == self.tail:
            return 1
        
        count = 1
        runner = self.tail
        while runner != None:
            if(runner.next != None):
                count += 1
            runner = runner.next

        return count

    def addTail(self, node):
        return

    def removeHead(self):
        if self.head == None:
            return None
        else:
            runner = self.head
            self.head = runner.next
            if self.head == None:
                self.tail = None
                return runner
            else:
                runner.next = None
                self.head.previous = None
                return runner

# Needs to be tested still