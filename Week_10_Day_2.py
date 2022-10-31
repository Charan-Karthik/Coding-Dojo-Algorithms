# Queue Data Structure Initial Practice

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.front = None
        self.back = None

    def enqueue(self, node):
        if self.front == None:
            self.front = node
            self.back = node
        else:
            self.back.next = node
            self.back = node

        return self
    
    def dequeue(self):
        if self.front == None:
            return None
        
        if self.front == self.back: # OR if self.front.next == None
            temp = self.front
            self.front = None
            self.back = None
            return temp
        else:
            temp = self.front
            self.front = temp.next
            temp.next = None
            return temp
    
    def peek(self):
        return self.front
    
    def isEmpty(self):
        return self.front == None
    
    def count(self):

        if self.front == None:
            return 0
        
        if self.front == self.back:
            return 1

        count = 0

        tempQueue = Queue()

        while self.front != None:
            tempNode = self.dequeue()
            tempQueue.enqueue(tempNode)
            count += 1
        
        while tempQueue.front != None:
            self.enqueue(tempQueue.dequeue())

        return count