var symbols = ["🍬","🍋","🐟","🍓"];
symbols[-1] = "🍓";
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
    
    var string = `  <code>
  ________________________________
 /* * * * * * * * * * * * * * * * \\ 
 |  L O S E  Y O U R  M O N E Y   | 
 \\_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_/ 
 ______________       ____________________________ 
| ` + i1` | ` + i2 + ` | ` + i3 + ` |     |🍬🍬🍬 - x2    🍋🍋 - x3   |
|-`+i1+`-|-`+i2+`-|-`+i3+`-|     |🍋🍋🍋 - x10  🐟🐟🐟 - x20  | 
| ` + i1+ ` | `+ i2 + ` | ` + i3 + ` |     | 🍓🍓🍓 - x 100        |
\\--------------/     \\----------------------------/ </code>`;
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

function reset(event) {
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
    var length = symbols.length;

    output(first,second,third);
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
