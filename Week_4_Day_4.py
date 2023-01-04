# Rotate String

def rotateString(string, num):
    charIdxToRotateOn = len(string)-num

    return string[charIdxToRotateOn:] + string[0:charIdxToRotateOn]


def checkIfStringIsARotation(string1, string2):
    pass