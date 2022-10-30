# Stack Data Structure
# Initial Attempt with Python

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
    
    def push(self, newNode):
        newNode.next = self.top
        self.top = newNode
        return self
    
    def pop(self, newNode):
        
        if self.top == None:
            return None

        removedNode = self.top
        self.top = removedNode.next

        if removedNode.next != None:
            removedNode.next = None
        
        return removedNode

    def peek(self):
        return self.top
    
    def isEmpty(self):
        return self.top == None
    
    def getLength(self):
        if self.top == None:
            return 0

        if self.top.next == None:
            return 1
        
        tempStack = Stack()
        while self.top != None:
            nodeToTransfer = self.pop()
            tempStack.push(nodeToTransfer)
        
        count = 0
        while tempStack.top != None:
            tempNode = tempStack.pop()
            self.push(tempNode)
            count += 1

        return count


# Needs to be tested