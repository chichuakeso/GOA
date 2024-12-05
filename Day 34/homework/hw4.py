#You can print your name on a billboard ad. Find out how much it will cost you

def billboard(name, price=30):
    cost = 0
    for i in name:
        cost += price
    return cost