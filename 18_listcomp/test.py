def triples(n):
    return [ (a,b,c) for a in range(2, n + 1) for b in range(a, n + 1) for c in range(b, n + 1) if ( a * a ) + ( b * b ) == (c * c)]


def quicksort(list):
    pivot = list[0]
    lesser = quicksort([x for x in list[1:] if x < pivot])
    greater = quicksort([x for x in list[1:] if x >= pivot])
    return lesser + [pivot] + greater


#triples(17)
#quicksort([1,23,5,36,3,124,364,356,12])
