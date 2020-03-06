'use strict';


var rand = Math.random().toString(30).substring(7, 5);

console.log("random", rand);


var rand2 = Math.random().toString(30);

console.log("random2", rand2);

var char = "abcdefg"


var rand3 = char.charAt(Math.floor(Math.random()   ));

console.log("random3", rand3)

//////////////////////////////

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 console.log("wat", makeid(5));

 /////////////////////////////



 var leng = 7

 var uppercase = "yes"

 var lowercase = "yes"

 var numbers = "yes"

 var specialcharacters = "yes"

//length choose - multiplyer

 function rndmlt(multipr) {
   

    for ( var n = 0; n < leng; n++) {
         multipr = multipr * 10;
    }
    return multipr;
 }

 var mtpr = rndmlt(1);

 console.log(mtpr);

//

//character choices

var charchoose = function charchoose() {
      var uprcs = ""
   if (uppercase === "yes") {
      uprcs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }

   var lorcs = ""
   if (lowercase === "yes") {
      lorcs = "abcdefghijklomopqrstuvwxyz";
   }

   var nmb = ""
   if (numbers === "yes") {
      nmb = "abcdefghijklomopqrstuvwxyz";
   }

   var spc = ""
   if (specialcharacters === "yes") {
      spc = "!@#$%^&*()?><;;:'~`";
   }

   return uprcs + lorcs + nmb + spc;
}

charchoose();

var char = charchoose();

//

console.log("uppercase test", char);


console.log("lil test",Math.floor(Math.random() * rndmlt(1)));