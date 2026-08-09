def square(number):
    if number <= 0 or number > 64:
        raise ValueError("square must be between 1 and 64")
        
    grains = 2**(number-1)
    return grains
    pass


def total():
    count = 0
    for i in range(1,65):
        count += square(i)
    return count
    pass
