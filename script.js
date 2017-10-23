function sleep_in(weekday,vacation){
    if (vacation) {
        return true;
    }
    if (! vacation && ! weekday){
        return true;
    }
    if (weekday && ! vacation){
        return false
    }
}

function monkey_trouble (a_smile, b_smile){
    if (a_smile && b_smile){
        return true;
    }
    if (! a_smile && !b_smile){
        return true;
    }
    if (a_smile && !b_smile){
        return false;
    }
    if (!a_smile && b_smile){
        return false;
    }
}

function string_times(string, num){
    var answer="";
    for (var i = 0; i < num; i++) {
        answer+=string
    }
    return answer;
}

function front_times(string,num){
    var answer="";
    for (var i = 0; i < num; i++) {
        answer+=string.substring(0,3);
    }
    return answer;
}

function string_bits(string){
    var answer="";
    for (var i=0;i<string.length;i+=2){
        answer+=string[i]
    }
    return answer;
}

function caughtSpeeding(speed,birthday){
    if (birthday){
        speed-=5;
    }
    if(speed<=60){
        return 0;
    }else if(speed<=80){
        return 1;
    }else{
        return 2;
    }
}

function fizz_buzz (num){
    if (num%3==0&&num%5==0) {
        return"FizzBuzz"
    }else if (num%3==0){
        return "Fizz";
    }else if(num%5==0){
        return "Buzz";
    }else{
        return num + "!";
    }
}

function teaParty (tea,candy){
    if (tea<5||candy<5){
        return 0;
    }else if(tea*2<=candy||candy*2<=tea){
        return 2;
    }else{
        return 1;
    }
}

function blackjack(x,y){
    if (x>21&&y>21){
        return 0;
    }if(x>21){
        x=0
    }
    if (y>21){
        y=0
    }

    if (x>y){
        return x;
    } else{
        return y;
    }
}

function loneSum(a,b,c){
    if(a==b&&b==c){
        return 0;
    }
    if (a==b){
        a=0;
        b=0;
    }
    if(a==c){
        a=0;
        c=0;
    }
    if(b==c){
        b=0;
        c=0;
    }
    return a+b+c
}

function tester() {

    //document.getElementById("output").innerHTML = sleep_in(false, true);
    //document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    //document.getElementById("output2").innerHTML = string_times();
    //document.getElementById("output2").innerHTML = front_times();
    //document.getElementById("output2").innerHTML = string_bits();
    //document.getElementById("output2").innerHTML = caughtSpeeding();
    //document.getElementById("output2").innerHTML = fizz_buzz (num);
    //document.getElementById("output2").innerHTML = teaParty(tea, candy);
    //document.getElementById("output2").innerHTML = blackjack(x,y);
    document.getElementById("output2").innerHTML = loneSum(a,b,c);
}
