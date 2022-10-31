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
        return
    
    def dequeue(self, node):
        return
    
    def peek(self):
        return self.front
    
    def isEmpty(self):
        return self.front == None
    
    def count(self):
        return