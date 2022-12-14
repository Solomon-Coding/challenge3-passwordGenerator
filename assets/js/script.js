// Assignment Code
var generateBtn = document.querySelector("#generate");

//Constants declarations
const alphLower = "abcdefghijklmnopqrstuvwxyz";
const alphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const char = "\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";
const options = [alphLower,alphUpper,num,char];

//Variable declarations
var passLength = 8;
var lc_val = 1;
var uc_val = 1;
var n_val = 1;
var sc_val = 1;

// Write password to the #password input
function writePassword() {
  var length = passwordLength();
  var var_list = passwordAttributes();
  var password = generatePassword(length,var_list);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for setting password length

function passwordLength() {
  passLength = Number(window.prompt("Please select a length for the password between 8 and 128.", ));
  if (passLength < 8) {
      window.alert("Password is too short.");
      passwordLength();
    } else if (passLength > 128) {
      window.alert("Password is too long.");
      passwordLength();
    } else {   
    }
  return passLength;
}

function passwordAttributes() {
  window.alert("Should the password include the following? Please type Y/N.")
  var lc = String(window.prompt("Lowercase? (Y/N)",));
  if (lc=="n"){
    lc="N";
  }
  lc_val = logic(lc);
  var uc = String(window.prompt("Uppercase? (Y/N)",));
  if (uc=="n"){
    uc="N";
  }
  uc_val = logic(uc);
  var n = String(window.prompt("Numeric? (Y/N)",));
  if (n=="n"){
    n="N"
  }
  n_val = logic(n);
  var sc = String(window.prompt("Special Characters? (Y/N)",));
  if (sc=="n"){
    sc="N"
  }
  sc_val = logic(sc);

  //Ideal method for loop
  if (lc=="N"&&uc=="N"&&n=="N"&&sc=="N"){
    window.alert("You must select at least one of the following password characteristics.")
    passwordAttributes();
  } else {}
  var var_list = [lc_val,uc_val,n_val,sc_val];
  return var_list;
}

// Function the checks the user input for password options
function logic(num) {
  if (num=="Y"||num=="N"||num=="y"||num=="n")  {
    if (num == "Y"||num=="y"){
      num_val = 1;
    } else {
      num_val = 0;  
    }
  } else {
    window.alert("Please enter 'Y' or 'N'.");
    logic();
  }
  return num_val;
}

function generatePassword(length,vars) {
  var includedVariables = vars[0]+vars[1]+vars[2]+vars[3];
  var divLength = Math.floor(length/includedVariables);
  var remainder = length%includedVariables;
  var rand = [];
  var rand2=[];
  var combinedString = "";
  var ii=0;
  for (var i=0; i<4;i++){
    if ((Number(vars[i]))==1){
      rand[ii] = randomize(options[i],divLength+remainder);
      rand2[ii] = rand[ii].join();
      if (ii!=0){
        combinedString = combinedString+","+rand[ii];
      }else{
      combinedString = combinedString+rand[ii];
      }
      remainder = 0;
      ii = ii+1;
    } else {
      ii=ii;
    }
  }
  var randNum = shuffle(combinedString,length);
  return randNum;
}

function randomize(array,terms) {
    var randArray = [];
    for (var j=0;j<terms;j++)
    randArray[j] = array[Math.floor(Math.random()*array.length)];
    return randArray;
}

function shuffle(vars,arrayLength) {
  var kk = [];
  for (var k=0; k < arrayLength; k++) {
    kk[k] = k;
  }
  var array = kk
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  var randString = [];
  m = 0;
  var randString2 = [];
  for (var n=0;n<(2*arrayLength)-1;n+=2){
    randString[array[m]] = vars[n];
    m = m+1;
  }
  randString2 = randString.join('') 
   return randString2;
}