# Determine if two strings are anagrams
# Be sure to account for spaces!

def isAnagram(s1, s2):
    s1CharFreq, s2CharFreq = {}, {}

    for i in range(len(s1)):
        if s1[i] != " ":
            s1CharFreq[s1[i]] = s1CharFreq.get(s1[i], 0) + 1
    
    for i in range(len(s2)):
        if s2[i] != " ":
            s2CharFreq[s2[i]] = s2CharFreq.get(s2[i], 0) + 1
    
    if len(s1CharFreq) != len(s2CharFreq):
        return False

    for keyChar in s1CharFreq:
        if s1CharFreq[keyChar] != s2CharFreq.get(keyChar, 0):
            return False
    return True