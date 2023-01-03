# NEED TO COMPLETE

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
    pass


print(encode('aaaabbcddd'))