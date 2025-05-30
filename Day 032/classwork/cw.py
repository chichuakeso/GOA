# Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

def remove_char(s):
    new_word = []
    empty_str = ""
    for i in s:
        new_word.append(i)
    new_word.pop(0)
    new_word.pop(-1)
    for i in new_word:
        empty_str += i
    return empty_str