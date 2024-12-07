#Create a function which answers the question "Are you playing banjo?".

def are_you_playing_banjo(name):
    if name[0] == "R" or name[0] == "r":
        return (name + " plays banjo")
    elif name[0] != "R" or name[0] != "r":
        return (name + " does not play banjo")