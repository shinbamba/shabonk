import re, functools

with open("text.txt", "rU") as txt:
    inp = txt.read()


def freqWords(words):
    return len([i for i in range(0, len(inp) - len(words)) if inp[i: i + len(words)] == words])

word = re.findall(r'\w+', inp)
words = list(set(word))


def mostFreq():
    return functools.reduce(lambda a, b: a if a[1] > b[1] else b, [(i, word.count(i)) for i in words])

print(freqWords("fairy"))
print(mostFreq())
