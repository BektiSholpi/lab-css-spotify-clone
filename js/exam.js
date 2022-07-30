
 /* 
const name = "Sholpan"
let age = 38
const countryOfBirth = "Kazajitan"

let whatHappened 

whatHappened = " i moved to BCN"
whatHappened = " i moved to Manso"
whatHappened = " i moved to Rubi"

console.log(age);  */

/* const age = parseInt(promt (Para comprar alchol tienes que decir tu edad?));

if(age <=21){
    console.log(Perdon, eres demasiado joven.) 
}
else if(age>=80){
    console.log(Señor, qreo que ya tienes que parar)
    console.log(Bienvenido al mundo de borachos!)
}else {
    console.log(Bienvenido al mundo de borachos!)
 */
const wuTangMember = prompt("Tell me your favorite member and I will tell you where is he/she from?");

 let neighborhood = ""
switch(wuTangMember){
    case "Rzaa":
    case "Kilah":
    case "Raekwon":
    case "Cappadonna":

    neighborhood = "Staten Island, New York";
    break;

    case "Method Man":

    neighborhood = "Hempstead, Nueva York";
    break;

    case "Inspectah Deck":
    case "Masta Killa":

   neighborhood = "Brooklyn, Nueva York";

    case "U-God":

    neighborhood = "Hempstead, Nueva York";
    break;

}
     console.log(`You favorite Wu Tang Member is from ${neighborhood}`);






 