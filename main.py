#from time import sleep
from time import time
from pyscript import document
import random
global money, messages,symbols,chances,comos,multipliers
money = 100
messages= ["better keep gambling!","please dont urinate on the floor.", "you should watch this video: https://www.youtube.com/watch?v=AtzmDIlddPs", "remember kids, don't do drugs!", "Can you feel the crippling debt?"]
symbols = ['🍬','🍋','🐟','🍓']
chances = [0 for i in range(90)] + [1 for i in range(70)] + [2 for i in range(30)] + [3 for i in range(8)] + [4 for i in range(1)]
combos = [111,22,222,333,444]
multipliers = [2,3,10,20,100]

# set up variables /\
def random(start,end):
    return int(time.time()**2) % (end+1) + start

def choice(array):
    return array[random(0,len(array)-1)]

def animate(e1,e2,e3,array):
    twisty = ['|','\\','-','/']
    a1,a2,a3 = 0,0,0
    length = len(array)
    for i in range(max([e1,e2,e3])):
        os.system('cls')
        if i < e1:
            add = random(1,3)
            if add+a1 < e1:
                a1 += add
            else:
                a1 += 1
        if i < e2:
            add = random(1,3)
            if add+a2 < e1:
                a2 += add
            else:
                a2 += 1
        if i < e3:
            add = random(1,3)
            if add+a3 < e1:
                a3 += add
            else:
                a3 += 1
        output(a1%length,a2%length,a3%length,array, twisty[i%4],twisty[-i%4])
        sleep(0.15)



def output(i1, i2, i3, array, twisty, rev):
    length = len(array)
    output_div = document.querySelector("#output")
    output_div.innerText = (f""" {twisty} {twisty} {twisty} {twisty} {twisty} {twisty} {twisty} {twisty} {twisty} {twisty} {twisty} {rev} {rev} {rev} {rev} {rev} {rev} {rev} {rev} {rev} {rev} {rev}
  ____________________________________________
 /* * * * * * * * * * * * * * * * * * * * * * \\
 | L O S E  Y O U R  C O L L E G E  M O N E Y |
 \\_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
 ______________       ____________________________
| {array[i1-1]} | {array[i2-1]} | {array[i3-1]} |     |🍬 - x0       🍋🍋 - x3     |
|-{array[i1]}-|-{array[i2]}-|-{array[i3]}-|     |🍬🍬🍬 - x2  🍋🍋🍋 - x10   |
| {array[(i1+1)%length]} | {array[(i2+1)%length]} | {array[(i3+1)%length]} |     |🐟🐟🐟 - x20 🍓🍓🍓 - x 100 |
\\--------------/     \\----------------------------/""")

def gamble(event):
    global money, messages,symbols,chances,comos,multipliers
    if money <= 0:
        moneydiv = document.querySelector("#result")
        moneydiv.innerText = choice("we require more minerals", "not enough minerals", "you have not enough minerals")
        return 0
        
    input_text = document.querySelector("#english")
    bet = input_text.value
    
    try:
        bet= abs(int(bet))
    except:
        bet = 10
    # set up bets /\
    # set up output \/
    first,second,third = choice(chances),choice(chances),choice(chances)
    add = 16
    animate(first+add,second+add,third+add,symbols)
    
    resDiv = document.querySelector("#result")
    for i in range(len(combos)):
        #print(comb)
        c = combos[i]
        if str(c) in str(comb):
            pos = i
            gain = (multipliers[pos]) * bet
            resDiv.innerText = t(f"you made {gain} dollars!")
            money += gain
            break
    else:
        money -= bet
        resDiv.innerText = (f"you lost {bet} dollars. {choice(messages)}")
    
    moneydiv = document.querySelector("#money")
    moneydiv.innerText = f"you have {money} dollars"
    
def test(event):
    input_text = document.querySelector("#english")
    moneydiv = document.querySelector("#result")
    moneydiv.innerText = input_text.value
