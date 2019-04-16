#Team Protending Greatness
#Sarar Aseer and Shin Bamba
# 4-16-2019
def union(a,b):
	return [x for x in a for y in b if x==y]+[y for y in b if y not in a]+[x for x in a if x not in b]

def cartpord(a,b):
	return [[x,y] for x in a for y in b]

def intersec(a,b):
	return [x for x in a for y in b if x==y]

def symdif(a,b):
	return [x for x in a if x not in b] +[x for x in b if x not in a]

def setfifa(a,b):
	return [x for x in a if x not in b]
