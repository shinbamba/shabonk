#1 
comp1= [str(x*22) for x in range(5)]
print(comp1)

loop1 = []
for x in range(5):
        loop1.append(str(x*22))
print(loop1);

#2 
comp2= [x*10+7 for x in range(5)]
print(comp2)

loop2 = []
for x in range(5):
        loop2.append(x*10+7)
print(loop2);

#3
comp3 = [0 if x%3 == 0 else y if x%3==1 else y*2 for y in range(3) for x in range(3)]
print(comp3);

loop3 =[]
for x in range(3):
	loop3.append(0)
	loop3.append(x)
	loop3.append(x*2)
print(loop3)


#4
loop4 = []
for x in range(101):
	for y in range(2,int(x/2+1)):
		if (x%y == 0):
			loop4.append(x)
			break;
print(loop4)			
comp4 = [x for x in range(101) if len([1 for y in range(2, int(x/2+1)) if x % y == 0]) != 0]
print(comp4)