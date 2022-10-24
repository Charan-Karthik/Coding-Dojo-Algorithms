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
        return
    
    def isEmpty(self):
        return self.head == None
    
    def size(self):
        return

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