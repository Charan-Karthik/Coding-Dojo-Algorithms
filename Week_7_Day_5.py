class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SLL:
    def __init__(self):
        self.head = None
    
    def printSLL(self):
        currentNode = self.head
        if currentNode == None:
            print("Empty SLL")
        while currentNode is not None:
            print(currentNode.value)
            currentNode = currentNode.next
    
    def isEmpty(self):
        return self.head == None
    
    def addToFront(self, node):
        node.next = self.head
        self.head = node
        return self
    
    def addDataToFront(self, data):
        newNode = Node(data)
        newNode.next = self.head
        self.head = newNode
        return self
    
    def contains(self, value):
        runner = self.head
        
        while runner:
            if runner.value == value:
                return True
            else:
                runner = runner.next
        
        return False
    
    def removeFromFront(self):
        if self.head == None:
            return None
        
        runner = self.head
        self.head = runner.next
        runner.next = None

        return runner.value
    
    def delete(self, data):
        if not self.head:
            return None
        
        runner = self.head
        if runner.value == data:
            self.head = runner.next
            runner.next = None
            return runner.value
        
        while runner.next is not None and runner.next.value != data:
            runner = runner.next

        temp = runner.next
        runner.next = temp.next
        temp.next = None
        return temp.value
    
    def size(self):
        if not self.head:
            return 0
        else:
            runner = self.head
            length = 0
            while runner:
                length += 1
                runner = runner.next
            
            return length
    
    def printSecondToLastValue(self):
        if self.head == None:
            print("Empty SLL")
            return
        
        runner = self.head
        if(runner.next == None):
            print("SLL only has one element, does not have a second to last node")
            return
        
        while runner.next.next != None:
            runner = runner.next
        
        print("Second to last node has a value of", str(runner.value) + ".")
        return 

    def printNthToLast(self, n):
        if self.head == None:
            print("Empty SLL")
            return
        
        runner = self.head
        runner2 = self.head
        for i in range(n):
            if(runner == None):
                print("SLL is less than", n, "nodes long.")
                return
            
            runner = runner.next
        
        while runner:
            runner2 = runner2.next
            runner = runner.next
        
        print("Node that is", n, "places away from the end has a value of", str(runner2.value) + ".")
        return

    def reverse():
        return "in progress..."


mySLL = SLL()
mySLL.addDataToFront(10)
mySLL.addDataToFront(20)
mySLL.addDataToFront(15)
mySLL.printNthToLast(4)