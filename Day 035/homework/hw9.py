#After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle

def find_needle(haystack):
    for i in range(len(haystack)):
        if haystack[i] == "needle":
            return "found the needle at position " + str(i)