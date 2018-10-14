var tage = ["Montag" , "Dienstag" , "Mittwoch" , "Donnerstag" , "Freitag" , "Samstag" , "Sonntag"];
var heutigertag = prompt('Which day is today?');

for (let i = 0 ; i <= 6 ; i++) {
    console.log(tage[i]);
    if (tage[i] == heutigertag) {
        console.log("Heute ist:");
        console.log("%c" + heutigertag , "font-weight: bold");
    }
}


var zahlen = ["10" , "7679" , "9340" , "3412" , "77" , "4887" , "7"];

for (let q = 0 ; q <= 6 ; q++ ){
    if (zahlen[q].startsWith("7") || zahlen[q].startsWith("3")){
        console.log(zahlen[q]);
    }
}

for (var v = 0 ; v <= 10 ; v++) {
    var hashtag = "#";
    for (var i = 0 ; i < v + 1 ; i++) {

    }
    console.log(hashtag);
}

