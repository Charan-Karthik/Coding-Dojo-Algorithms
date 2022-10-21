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