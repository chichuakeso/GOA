#Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    result = []
    for i in birds:
        if i != "African" and i != "Roman Tufted" and i != "Toulouse" and i != "Pilgrim" and i != "Steinbacher":
            result.append(i)
    return result