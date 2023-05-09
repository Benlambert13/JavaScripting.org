var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var encryptedAlph = [];
var encryptedPasswords = [];
var usernames = ["Admin"];
var passwords = ["admin123"];
var newLetters = [];

onEvent("login", "click", function(){
  loginVer(getText("username"), getText("password"));
});

alphScramble();
encryptPass("be");


console.log(encryptedAlph);
console.log(newLetters);
console.log(encryptedPasswords);

function loginVer(user, pass){
  for(var i = 0; i < usernames.length; i++){
    if((usernames[i] == user) && (passwords[i] == pass)){
      setScreen("screen2");
    }
  }
}

function alphScramble(){
  for(var i = 0; i < alph.length; i++){
    if(encryptedAlph.length !== alph.length){
      insertItem(encryptedAlph, randomNumber(0, alph.length), alph[i]);
    }
  }
}

function encryptPass(password){
  var r = 1;
  for(var i = 0; i < password.length; i++){
    for(var q = 0; q < alph.length; q++){
      if(alph[q] == password.substring(r, i)){
        r = r + 1;
        appendItem(newLetters, encryptedAlph[q]);
      }
    }
  }
  var newPassword = "";
  for(var y = 0; y < newLetters.length; y++){
    newPassword = newPassword + newLetters[y];
  }
  //newLetters = [];
  appendItem(encryptedPasswords, newPassword);
}

function decryptPass(password){
  var oriLetters = [];
  var r = 1;
  for(var i = 0; i < password.length; i++){
    for(var q = 0; q < alph.length; q++){
      if(encryptedAlph[q] == password.substring(r, i)){
        r = r + 1;
        appendItem(oriLetters, alph[q]);
      }
    }
  }
  var decryptPassword = "";
  for(var y = 0; y < oriLetters.length; y++){
    decryptPassword = decryptPassword + oriLetters[y];
  }
  oriLetters = [];
  appendItem(passwords, decryptPassword);
}