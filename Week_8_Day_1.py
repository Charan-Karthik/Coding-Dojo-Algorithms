# Binary Tree Introduction

class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def isEmpty(self):
        return self.root == None
    
    def insert(self, node, current = this.root):
        
        if current == None:
            this.root = node
            return
        
        if node.value > current.value:
            if current.right == None:
                current.right = node
                return
            else:
                self.insert(node, current.right)
        elif node.value < current.value:
            if current.left == None:
                current.left = node
                return
            else:
                self.insert(node, current.left)