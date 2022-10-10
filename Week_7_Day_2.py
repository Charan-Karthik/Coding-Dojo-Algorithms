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
        # return True if self.head == None else False
        # ^ practicing ternary in python
    
    def addToFront(self, node):
        if(self.head == None):
            self.head = node
        else:
            node.next = self.head
            self.head = node


mySLL = SLL()
mySLL.addToFront(Node(10))
mySLL.addToFront(Node(15))
mySLL.addToFront(Node(20))
mySLL.printSLL()