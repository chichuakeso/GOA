#Write a function to convert a name into initials.

def abbrev_name(name):
    return name[0].upper() + "." + name[name.index(" ") + 1].upper()