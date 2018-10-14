var num = 1;

if (num == 6) {
    console.log("right answer");
} else if (num <= -1) {
    console.log("num ist kleiner als 1")
 } else if (num >= 3) {
    console.log(">= 3")
  } else {
    console.log("wrong")
   }

switch (num) {
    case 1:
    console.log("= 1");
    break;
    case 2:
    console.log("= 2");
    break;
    default:
    console.log("die nummer ist nicht vorhanden.");
    break;
}

(num == 1)? console.log("num ist 1"): console.log("num ist nicht 1");

for (let i = 0; i <= 10;) {
    if (i == 5) continue; 
        console.log(i);
         i+=2
}

while (num <= 10) {
    console.log(num);
    num += 2;
}



var liste = [1 , 5 , 7 , "apfel"];

for (let i = 0; i <= 3; i++) {
    console.log(liste[i])
}