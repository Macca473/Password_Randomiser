'use strict';

///////////////////////////// Testing cr*p

var rand = Math.random().toString(30).substring(7, 5);

console.log("random", rand);


var rand2 = Math.random().toString(30);

console.log("random2", rand2);

var char = "abcdefg"


var rand3 = char.charAt(Math.floor(Math.random()   ));

console.log("random3", rand3)

////////////////////////////// refrence code

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

 //var leng = 7

 //var uppercase = "yes"

 //var lowercase = "yes"

 //var numbers = "yes"

 //var specialcharacters = "yes"

//length choose - multiplyer REDUNDANT and doesn't work anyway 

 //function rndmlt(multipr) {
   

    //for ( var n = 0; n < leng; n++) {
         //multipr = multipr * 10;
    //}
    //return multipr;
 //}

 //var mtpr = rndmlt(1);

 //console.log(mtpr);

//

//length choose - unnessery restrictions 

var lengraw = prompt("how long do you want the password? (needs to be a number within 8 and 128 characters");

var lengfn = function lengfn() {
      var leng = 0;
   if (lengraw >= 8, lengraw <= 128) {
         leng = lengraw;
   } else {
      lengraw = alert("can't you read? it needs to be needs to be a number within 8 and 128");
   }
   return leng;
}

   var leng = lengfn();

   console.log("leng", leng)

//character choices

alert("answer yes or no to the following questions")

 var uppercase = prompt("do you want uppercase letters?");

 var lowercase = prompt("do you want lowercase letters?")

 var numbers = prompt("do you want numbers?")

 var specialcharacters = ("do you want special characters?")

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

//

console.log("uppercase test", char);

console.log("lil test",Math.floor(Math.random() * 1));

//

//everything thrown together

var randpsw = function randpsw() {
         var rndcrd = "";
      for (var x = 0; leng > x; x++) {
         rndcrd = rndcrd + char.charAt(Math.floor(Math.random() * char.length));
      }
      return rndcrd;
}

console.log("final?", randpsw());
