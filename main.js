var symbols = ["🍬","🍋","🐟","🍓"];
var money = 100;
var chances = [];
var combos = [111,22,222,333,444];
var multipliers = [2,3,10,20,100];

for (let i = 1; i < 90; i++) {
    chances.push(0);
    if (i <= 60) {
        chances.push(1);
    }
    if (i <= 30) {
        chances.push(2);
    }
    if (i <= 8) {
        chances.push(3);
    }
    if (i <= 1) {
        chances.push(4);
    }
}

// setup variables /\
// setup functions \/
function output(i1,i2,i3) {
    
    var length = symbols.length;
    var string = `  
  ____________________________________________ <br>
 /* * * * * * * * * * * * * * * * * * * * * * \\ <br>
 | L O S E  Y O U R  C O L L E G E  M O N E Y | <br>
 \\_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/ <br>
 ______________       ____________________________ <br>
| ${symbols[i1-1]} | ${symbols[i2-1]} | ${symbols[i3-1]} |     |🍬🍬🍬 - x2    🍋🍋 - x3   | <br>
|-${symbols[i1]}-|-${symbols[i2]}-|-${symbols[i3]}-|     |🍋🍋🍋 - x10  🐟🐟🐟 - x20  | <br>
| ${symbols[(i1+1)%length]} | ${symbols[(i2+1)%length]} | ${symbols[(i3+1)%length]} |     | 🍓🍓🍓 - x 100        | <br>
\\--------------/     \\----------------------------/ <br>`;
    document.getElementById("output").innerHTML = string;
}

function betTen(event) {
    gamble(10);
}
function betHund(event) {
    gamble(100);
}
function allIn(event) {
    gamble(money);
}

function RESET(event) {
    money = 100;
}

function gamble(bet) {
    if (bet > money) {
        return 0;
    }
    var c,d,e,first,second,third;
    var comb;
    c = Math.random() * 100;
    d = Math.random() * 100;
    e = Math.random() * 100;

    first = chances[c];
    second = chances[d];
    third = chances[e];
    comb = Number(String(first+1) + String(second+1) + String(third+1));
    var add = 16;
    money-=bet;
    document.getElementById("result").innerHTML = "you lost " + bet + " dollars!";

    output(first+add,second+add,third+add);
    for (var i = 0; i < len(combos); i++){
        c = combos[i];
        if (toString(c) in toString(comb)) {
            let gain = multipliers[i] * bet;
            document.getElementById("result").innerHTML = "you made " + gain + " dollars!";
            money += gain + bet
            break
        }
    }

    document.getElementById("money").innerHTML = "you have " +  String(money - bet) + "$";
    return 0;
}
