var symbols = ["🍬","🍋","🐟","🍓"];
symbols[5] = ["🍬"]
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
    if (i <= 31) {
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

function animate(i1,i2,i3) {
    let limit1 = i1 + 16;
    let limit2 = i2 + 16;
    let limit3 = i3 + 16;

    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    for (let i = 0; i < 22; i++) {
        if (pos1 < limit1) {
            add = (Math.random() * 10) % 3 + 1;
            if (add+pos1 <= limit1) {
                pos1 += add;
            }else {
                pos1 += 1;
            }
        }
        if (pos2 < limit2) {
            add = (Math.random() * 10) % 3 + 1;
            if (add+pos2 <= limit2) {
                pos2 += add;
            }else {
                pos2 += 1;
            }
        }
        if (pos3 < limit3) {
            add = (Math.random() * 10) % 3 + 1;
            if (add+pos3 <= limit3) {
                pos3 += add;
            }else {
                pos3 += 1;
            }
        }
        output(pos1,pos2,pos3);
        setTimeout(() => {
  console.log("Hey...<br>you're not supposed to be here :/");
        }, "150");
    }
}

function output(i1,i2,i3) {
    var string = `<pre>
   ____________________________________________ 
  /* * * * * * * * * * * * * * * * * * * * * * \\ 
  |  L  O  S  E   Y  O  U  R   M  O  N  E  Y ! | 
  \\_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
  ______________       ______________________________
| ${symbols[(+i1-1)%4]} | ${symbols[(+i2-1)%4]} | ${symbols[(+i3-1)%4]} |     |🍬🍬🍬 - x2    🍋🍋 - x3   |
|-${symbols[(+i1)%4]}-|-${symbols[(+i2)%4]}-|-${symbols[(+i3)%4]}-|     |🍋🍋🍋 - x10  🐟🐟🐟 - x20 | 
| ${symbols[(+i1+1)%4]} | ${symbols[(+i2+1)%4]} | ${symbols[(+i3+1)%4]} |     |🍓🍓🍓 - x 100              | 
\\---------------/      \\----------------------------/ </pre>`;
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
    document.getElementById("result").innerHTML = "RESET";
    document.getElementById("result").innerHTML = "RESET";
    document.getElementById("output").innerHTML = "RESET";
    document.getElementById("money").innerHTML = "100";
    money = 100;
}

function gamble(bet) {
    if (bet > money) {
        return 0;
    }
    // c,d,e,first,second,third;
    let c = Math.random() * 100;
    let d = Math.random() * 100;
    let e = Math.random() * 100;

    c = (c - c % 1);
    d = (d - d % 1);
    e = (e - e % 1);

    let first = chances[c];
    let second = chances[d];
    let third = chances[e];

    let comb = (String(first+1) + String(second+1) + String(third+1));
    output(first,second,third);
    
    money -= bet;
    document.getElementById("result").innerHTML = "you lost " + bet + " dollars.";
    document.getElementById("money").innerHTML = "you have " +  String(money) + "$";

    for (let i = 0; i < combos.length; i++) {
        if (comb.includes(combos[i])) {
            // match found
            let gain = bet * multipliers[i];
            money += gain + bet;
            document.getElementById("result").innerHTML = "you made " + gain + " dollars!";
            document.getElementById("money").innerHTML = "you have " +  String(money) + "$";
            break;
        }
    }
    if (money < 100) {
        document.getElementById("hund").disabled = true;
    }
    if (money < 10) {
        document.getElementById("ten").disabled = true;
    }

    if (money > 100) {
        document.getElementById("hund").disabled = false;
    }
    if (money > 10) {
        document.getElementById("ten").disabled = false;
    }
}
