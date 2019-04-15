upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower = "abcdefghijklmnopqrstuvqxyz"
num = "1234567890"
sym = ".?@&#,;:-_*"


def check(word):
    f = [ 
	1 if x in upper 
	else 2 if x in lower 
	else 3 if x in num 
	else 0 for x in word
	]
    return (1 in f and 2 in f and 3 in f)

def str(word):
	
	s = 0
	f = [ 
	1 if x in upper 
	else 2 if x in lower 
	else 3 if x in num 
	else 0 for x in word
	]
	num_upper = f.count(1)
	num_lower = f.count(2)
	num_num = f.count(3)
	num_sym = f.count(4)

	length = len(f)
	if length < 4:
		return "0"
	#lower	
	if (num_lower < length / 2 ):
		s += num_lower
	else:
		s += num_lower / 3
	#upper	
	if (num_upper < length / 2):
		s += num_upper
	else:
		s += num_upper / 2
	#numbers
	if (num_num < length / 2):
		s += num_num
	else:
		s += num_num / 2

	if s > 10:
		s = 10
	return s
	
print (check("aasefhdtjfssefe"))
print (check("myNoobPass1234"))
print (check("12345"))	
print(str("myNoobPass1234"))
print(str("hhhhttd"))
print(str("b3b4bb5b54b4n5nb"))
print(str("s"))