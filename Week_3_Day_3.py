# You are given a string that may contain sequences of consecutive characters.
# Create a function to shorten a string by including the character, then the 
# number of times it appears. For "aaaabbcddd" return "a4b2c1d3"

def encode(string):
    charFrequencyTable = {}

    for i in range(len(string)):
        charFrequencyTable[string[i]] = charFrequencyTable.get(string[i], 0) + 1
    
    res = []
    for char in charFrequencyTable:
        res.append(char+str(charFrequencyTable[char]))
    
    return "".join(res)

## given an encoded string, decode and return it
## i.e. given "a3b2c1d3" return "aaabbcddd"
## make sure to handle special cases such as "g14f12" and beyond

def decode(string):

    res = []

    i = 0
    while i < len(string):
        if string[i].isalpha():
            letter = string[i]
            i += 1
        else:
            j = i
            while j < len(string) and string[j].isdigit():
                j += 1
            
            # print(i, j-1)
            if i != j-1:
                number = int(string[i]+string[j-1])
            else:
                number = int(string[i])
            
            while number > 0:
                res.append(letter)
                number -= 1
            
            i = j
        
    return ''.join(res)


print(encode('aaaabbcddd'))
print(encode('ggggggggggggggffffffffffff'))

print(decode('g14f12'))
print(decode('a3b2c1d3'))