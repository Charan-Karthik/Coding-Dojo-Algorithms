# Valid Parentheses

def validParentheses(string):
    stack = []
    hashmap = {")":"(", "]":"[","}":"{"}
    
    for char in string:
        if char in hashmap:
            if stack and stack[-1] == hashmap[char]:
                stack.pop()
            else:
                return False
        else:
            stack.append(char)
        
    if stack:
        return False
    else:
        return True