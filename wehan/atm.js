//atm

function atm(number){
    var hundreds=Math.floor(number / 100);
    let rest = number%100;
    var fifties= Math.floor(rest / 50);
    rest = rest % 50;
    var twenties= Math.floor(rest /20);
    rest %= 20;
    var tenth= Math.floor(rest /10);

    return `you have ${hundreds} 100, ${fifties} 50,${twenties} 20, ${tenth} 10,`;
}
console.log(atm(280));


//time converter
function time(number){
    var hour=Math.floor(number/60);
    let rest = number%60;
    var minute = rest;
    return `${hour} hour(s) and ${minute} minute(s)`;
}
console.log(time(387));