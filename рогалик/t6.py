							#===================================#
							######----Спавним черепашку----######
							#===================================#
							#800080
							
							
							
import turtle as t
import random




print('''-------------------------------------------------------------------------------------------
Приветствую вас в моей игре! 
Для начала вам необходимо выбрать понравившиеся вам картинки предметов.
-------------------------------------------------------------------------------------------''')



							#=================================#
							######----Создаем уровень----######
							#=================================#
							
							



def createLevel():
	global level_y
	global level_x
	global level
	global u1
	global u2
	u1=0
	u2=0
	kolonka=[]
	for i in range (20):
		kolonka.append(0)
	print(kolonka)
	level_y=len(kolonka)
	print('Размер уровня по оси Y: ',level_y)
	level=[]
	for i in range (20):	
		level.append(list(kolonka))
	print(level)
	print(level[0])
	print(level[19])
	print(level[0][9])
	level_x=len(level)
	print('Размер уровня по оси X: ',level_x)
	
	
	
	
						#==============================================#
						######----Генерируем рандомные объекты----######
						#==============================================#
						
						
						
						
						
	if vibor5==2:
		u1=u1+33
		u2=u2+30
	if vibor5==1:
		u1=u1+23
		u2=u2+20
	if vibor5==0:
		u1=u1+18
		u2=u2+14
	for r in range(20):
		level[0][r]=1
	for r1 in range(20):
		level[r1][19]=1
	for r2 in range(20):
		level[r2][0]=1
	for r3 in range(20):
		level[19][r3]=1
	for r4 in range(u1):
		stenax=random.randint(1,18)
		stenay=random.randint(1,18)
		level[stenax][stenay]=1
	for r5 in range(u2):
		lavax=random.randint(1,18)
		lavay=random.randint(1,18)
		level[lavax][lavay]=2
	for r6 in range(1):
		level[1][1]=0
	for r7 in range(1):
		level[18][18]=0
t.onkey(createLevel,'2')



x=-350
y=150
n1=0
n2=0







					#===================================================#
					######----Создаю выбор нужной нам  картинки----######
					#===================================================#
					
					
					
					
					
tiles1=['''dungeonTiles/floor01.gif''','''dungeonTiles/floor02.gif''','''dungeonTiles/floor03.gif''','''dungeonTiles/floor04.gif''','''dungeonTiles/floor05.gif''']
tiles2=['''dungeonTiles/lava01.gif''','''dungeonTiles/lava02.gif''','''dungeonTiles/lava03.gif''','''dungeonTiles/lava04.gif''','''dungeonTiles/lava05.gif''']
tiles3=['''dungeonTiles/wall01.gif''','''dungeonTiles/wall02.gif''','''dungeonTiles/wall03.gif''','''dungeonTiles/wall04.gif''','''dungeonTiles/wall05.gif''']
tiles4=['''dungeonTiles/hero01.gif''','''dungeonTiles/hero02.gif''','''dungeonTiles/hero03.gif''','''dungeonTiles/hero04.gif''','''dungeonTiles/hero05.gif''','''dungeonTiles/hero06.gif''',]
vibor1=int(input('''Выберите иконку пола 0-4: '''))
while vibor1>4 or vibor1<0:
	print('''-------------------------------------------------------------------------------------------
Неверное число''')
	vibor1=int(input('''-------------------------------------------------------------------------------------------
Выберите иконку пола 0-4: '''))
sl1=tiles1[vibor1]
vibor2=int(input('''-------------------------------------------------------------------------------------------
Выберите иконку лавы 0-4: '''))
while vibor2>4 or vibor2<0:
	print('''-------------------------------------------------------------------------------------------
Неверное число''')
	vibor2=int(input('''-------------------------------------------------------------------------------------------
Выберите иконку лавы 0-4: '''))
sl2=tiles2[vibor2]
vibor3=int(input('''-------------------------------------------------------------------------------------------
Выберите иконку стены 0-4: '''))
while vibor3>4 or vibor3<0:
	print('''-------------------------------------------------------------------------------------------
Неверное число''')
	vibor3=int(input('''-------------------------------------------------------------------------------------------
Выберите иконку стены 0-4: '''))
sl3=tiles3[vibor3]
vibor4=int(input('''-------------------------------------------------------------------------------------------
Выберите картинку персонажа 0-5: '''))
while vibor4>5 or vibor4<0:
	print('''-------------------------------------------------------------------------------------------
Неверное число''')
	vibor4=int(input('''-------------------------------------------------------------------------------------------
Выберите картинку персонажа 0-5: '''))
sl4=tiles4[vibor4]
vibor5=int(input('''-------------------------------------------------------------------------------------------
Выберите уровень сложности 0-2:  '''))
while vibor5>2 or vibor5<0:
	print('''-------------------------------------------------------------------------------------------
Неверное число''')
	vibor5=int(input('''-------------------------------------------------------------------------------------------
Выберите уровень сложности 0-2:  '''))
t.addshape(sl1)
t.addshape(sl2)
t.addshape(sl3)
t.addshape(sl4)







	
				#=========================================================#
				######----Создаю привязанность картинок и списков----######	
				#=========================================================#
				
				
				
				
A=[]		
B=[]
hp=2				
def drawLevel():
	t.speed(10)
	global y
	global n1
	global n2
	global a
	global hp
	global Alen
	global Blen
	if vibor1==0:
		t.addshape("art-pavpoint-bg2.gif")
		t.bgpic("art-pavpoint-bg2.gif")
	if vibor1==1:
		t.addshape("zelen2.gif")
		t.bgpic("zelen2.gif")
	if vibor1==2:
		t.addshape("Pustyna2.gif")
		t.bgpic("Pustyna2.gif")
	if vibor1==3:
		t.addshape("svetlo2.gif")
		t.bgpic("svetlo2.gif")
	if vibor1==4:
		t.addshape("more.gif")
		t.bgpic("more.gif")	
	t.penup()
	t.left(90)
	t.forward(350)
	t.right(90)
	t.write('Это рогалик',False,'center',("Junegull",40,'normal'))
	t.setpos(-200,300)
	t.forward(200)
	t.write('Ваша задача пройти уровень. Вы должны дойди до нижнего правого угла.',False,'center',("Junegull",15,'normal'))
	t.setpos(-200,250)
	t.forward(200)
	t.write('!Удачи!',False,'center',("Junegull",15,'normal'))
	t.setpos(-500,300)
	t.addshape('serdce4.gif')
	t.shape('serdce4.gif')
	t.stamp()
	t.setpos(-470,290)
	t.write('=',False,'center',("Junegull",15,'normal'))
	t.forward(10)
	t.write(hp,False,'center',("Junegull",15,'normal'))
	t.ht()
	for i in range(level_y):
		t.penup()
		t.setpos(x,y)
		for j in range(level_x):
			a=level[n1][n2]
			#t.write(str(n1)+':'+str(n2)+'='+str(a))#Закомментил значения колонки и столбца#
			t.forward(32)	
			if a==0:		
				t.shape(sl1)
				t.stamp()
			if a==2:	
				t.shape(sl2)
				t.stamp()
			if a==1:	
				t.shape(sl3)
				t.stamp()	
			if a==2:
				A.append(n1)
				B.append(n2)
			n1=n1+1
		n1=0
		y=y-32
		n2=n2+1
	print(A)
	print(B)
	Alen=len(A)
	print(Alen)
	Blen=len(B)
	print(Blen)
t.onkey(drawLevel,'1')






								#==============================#
								######----Создаю героя----######
								#==============================#
								
								
								
								
hero_x=-288
hero_y=128
hero=t.Turtle()
def HERO():
	global hero_x
	global hero_y
	global a
	global hp
	hero.penup()
	hero.setpos(-288,128)
	hero.shape(sl4)
	hero.setpos(hero_x,hero_y)
	print(hero_x,' ',hero_y)
t.onkey(HERO,'3')



def UP():
	global hero_x
	global hero_y
	global a
	hero_y=hero_y+32
	hero.setpos(hero_x,hero_y)
	print(hero_x,' ',hero_y)
	if hero_x==256 and hero_y==-416:
		t.clear()
		t.addshape("final.gif")
		t.bgpic("final.gif")
		t.setpos(-200,300)
		t.forward(175)
		t.write('ПОБЕДА ПОБЕДА ВМЕСТО ВКУСНОГО ОБЕДА',False,'center',("Junegull",40,'normal'))
	if hero_x==p and hero_y==o:
		t.clear()
		t.addshape('badend.gif')
		t.bgpic('badend.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВАС ПОЙМАЛ ПУДЖ И СЪЕЛ',False,'center',("Junegull",40,'normal'))
	for i in range (len(A)):
		if -288+A[i]*32-32==hero_x and 128-B[i]*32+32==hero_y:
			hp=hp-1
			t.setpos(-445,275)
			t.write('уже',False,'center',("Junegull",15,'normal'))
			t.forward(25)
			t.write(hp,False,'center',("Junegull",15,'normal'))	
	if hp==0:
		t.clear()
		t.addshape('sad.gif')
		t.bgpic('sad.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВЫ УМЕРЛИ(((((')
t.onkey(UP,'Up')


def DOWN():
	global hero_x
	global hero_y
	global a,level_x,level_y
	global hp
	hero_y=hero_y-32
	hero.setpos(hero_x,hero_y)
	print(hero_x,' ',hero_y)
	if hero_x==256 and hero_y==-416:
		t.clear()
		t.addshape("final.gif")
		t.bgpic("final.gif")
		t.setpos(-200,300)
		t.forward(175)
		t.write('ПОБЕДА ПОБЕДА ВМЕСТО ВКУСНОГО ОБЕДА',False,'center',("Junegull",40,'normal'))
	if hero_x==p and hero_y==o:
		t.clear()
		t.addshape('badend.gif')
		t.bgpic('badend.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВАС ПОЙМАЛ ПУДЖ И СЪЕЛ',False,'center',("Junegull",40,'normal'))
	for i in range (len(A)):
		if -288+A[i]*32-32==hero_x and 128-B[i]*32+32==hero_y:
			hp=hp-1
			t.setpos(-445,275)
			t.write('уже',False,'center',("Junegull",15,'normal'))
			t.forward(25)
			t.write(hp,False,'center',("Junegull",15,'normal'))	
	if hp==0:
		t.clear()
		t.addshape('sad.gif')
		t.bgpic('sad.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВЫ УМЕРЛИ(((((')
t.onkey(DOWN,'Down')



def RIGHT():
	global hero_x
	global hero_y
	global a
	global hp
	hero_x=hero_x+32
	hero.setpos(hero_x,hero_y)
	print(hero_x,' ',hero_y)
	if p==hero_x and hero_y==o:
		t.clear()
		t.addshape('badend.gif')
		t.bgpic('badend.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВАС ПОЙМАЛ ПУДЖ И СЪЕЛ',False,'center',("Junegull",40,'normal'))
	if hero_x==256 and hero_y==-416:
		t.clear()
		t.addshape("final.gif")
		t.bgpic("final.gif")
		t.setpos(-200,300)
		t.forward(175)
		t.write('ПОБЕДА ПОБЕДА ВМЕСТО ВКУСНОГО ОБЕДА',False,'center',("Junegull",40,'normal'))
	for i in range (len(A)):
		if -288+A[i]*32-32==hero_x and 128-B[i]*32+32==hero_y:
			hp=hp-1
			t.setpos(-445,275)
			t.write('уже',False,'center',("Junegull",15,'normal'))
			t.forward(25)
			t.write(hp,False,'center',("Junegull",15,'normal'))	
	if hp==0:
		t.clear()
		t.addshape('sad.gif')
		t.bgpic('sad.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВЫ УМЕРЛИ(((((')
t.onkey(RIGHT,'Right')



def LEFT():
	global hero_x
	global hero_y
	global a
	global hp
	hero_x=hero_x-32
	hero.setpos(hero_x,hero_y)
	print(hero_x,' ',hero_y)
	if hero_x==256 and hero_y==-416:
		t.clear()
		t.addshape("final.gif")
		t.bgpic("final.gif")
		t.setpos(-200,300)
		t.forward(175)
		t.write('ПОБЕДА ПОБЕДА ВМЕСТО ВКУСНОГО ОБЕДА',False,'center',("Junegull",40,'normal'))
	if hero_x==p and hero_y==o:
		t.clear()
		t.addshape('badend.gif')
		t.bgpic('badend.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВАС ПОЙМАЛ ПУДЖ И СЪЕЛ',False,'center',("Junegull",40,'normal'))
	for i in range (len(A)):
		if -288+A[i]*32-32==hero_x and 128-B[i]*32+32==hero_y:
			hp=hp-1
			t.setpos(-445,275)
			t.write('уже',False,'center',("Junegull",15,'normal'))
			t.forward(25)
			t.write(hp,False,'center',("Junegull",15,'normal'))	
	if hp==0:
		t.clear()
		t.addshape('sad.gif')
		t.bgpic('sad.gif')
		t.setpos(-200,300)
		t.forward(175)
		t.write('ВЫ УМЕРЛИ(((((',False,'center',("Junegull",40,'normal'))		
t.onkey(LEFT,'Left')

		
					
						#========================================================#
						#####------------Спавн опасного пуджа----------------#####
						#========================================================#
	
	
		


p=random.choice([-288,-256,-224,-192,-160,-128,-96,-64,-32,0,32,64,96,128,160,192,224,256])
o=random.choice([-416,-384,-352,-320,-288,-256,-224,-192,-160,-128,-96,-64,-32,0,32,64,96,128])
evil=t.Turtle()
def EVIL():
	t.addshape("pudge.gif")
	evil.shape("pudge.gif")
	evil.penup()
	evil.setpos(p,o)
	print(p,' ',o)
t.onkey(EVIL,'4')




t.listen()
t.mainloop()
