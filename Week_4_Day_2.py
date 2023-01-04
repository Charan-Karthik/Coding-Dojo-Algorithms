# Reverse words in a string
# Account for potential extra whitespace by removing anything unnecessary

def reverseWords(s):
    
    word = ""
    wordList = []
    i = 0
    while i < len(s):
        # get rid of leading spaces
        if i == 0 and s[i] == " ":
            while s[i] == " ":
                i += 1
            continue
        # continue from index where there are no more leading spaces
        else:
            if s[i] != " ":
                word += s[i]
            else:
                if word != "":
                    wordList.insert(0, word)
                    word = ""
            i += 1
    
    if word != "":
        wordList.insert(0, word)
    
    return " ".join(wordList)
        