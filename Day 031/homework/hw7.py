#Complete the solution so that it reverses the string passed into it

def solution(string):
    word = ""
    for i in range(len(string)-1, -1, -1):
        word = word + string[i]
    return word

