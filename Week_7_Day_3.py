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
        # return self.head == None
        return True if self.head == None else False
        # ^ practicing ternary in python
    
    def addToFront(self, node):
        # if(self.head == None):
        #     self.head = node
        # else:
        #     node.next = self.head
        #     self.head = node

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
        
        while(runner):
            if(runner.value == value):
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