import os
from time import sleep
from random import choice, randint
money = 100
messages= ["better keep gambling!","please dont urinate on the floor.", "you should watch this video: https://www.youtube.com/watch?v=AtzmDIlddPs", "remember kids, don't do drugs!", "Can you feel the crippling debt?"]
symbols = ['🍬','🍋','🐟','🍓']
chances = [0 for i in range(90)] + [1 for i in range(70)] + [2 for i in range(30)] + [3 for i in range(8)] + [4 for i in range(1)]
combos = [111,22,222,333,444]
multipliers = [2,3,10,20,100]

# set up variables /\

def animate(e1,e2,e3,array):
    twisty = ['|','\\','-','/']
    a1,a2,a3 = 0,0,0
    length = len(array)
    for i in range(max([e1,e2,e3])):
        os.system('cls')
        if i < e1:
            add = randint(1,3)
            if add+a1 < e1:
                a1 += add
            else:
                a1 += 1
        if i < e2:
            add = randint(1,3)
            if add+a2 < e1:
                a2 += add
            else:
                a2 += 1
        if i < e3:
            add = randint(1,3)
            if add+a3 < e1:
                a3 += add
            else:
                a3 += 1
        output(a1%length,a2%length,a3%length,array, twisty[i%4],twisty[-i%4])
        sleep(0.15)



def gamble(event):
    moneydiv = document.querySelector("#result")
    moneydiv.innerText = choice("we require more minerals", "not enough minerals", "you have not enough minerals")
