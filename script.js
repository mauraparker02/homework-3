// PSEDUO: 

// First the user will click to generate a password 
//   Create an on click event that must lead to a prompt asking to pick between a number 8-128 
// First prompt prefered length 
//   this answer will generate the length of a loop to add special characters 
// Then a prompt asks if the user wants uppercase letters 
//   if they say yes, then change all characters to uppercase 
// the a prompt asks if the user wants lowercase characters 
//   if they say yes, the user will add lowercase characters 
// the prompt will ask if they want to include special characters 
//   if yes it will add special characters 
// when all prompts are answered it will pop up with a password including all of the critera asked by the user
//   create an alert with a password 



//ATTEMPT: These were various sections that I attempted, none of which actually ended up being functional. 


// //Variables to possibly grab from 
var passwordStringUpper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var passwordStringLower= "abcdefghijklmnopqrstuvwxyz"
var generatedPass= ""

//Lines 70-72 testing special character string... could not get it to work using \ or "" or `` ? 
//var passwordStringSpecial= "!""#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//console.log(passwordStringSpecial)

//opening alert 
alert("Hi, if you need a new password: click generate password");

//Clicking the button + choosing number 
document.btn.addEventListener("click", function() {
  userNum= 0; 
  prompt("Pick between a number 8-128"){
  if ( userNum < 128) {
    alert("That password is too big");
  }
  else if (userNum > 8) {
    alert("That Password is too small")
    ;
  }
  else {
    prompt("Do you want uppercase letters")
    if (prompt === true){
      //add var passwordStringUpper using math.random and math.floor to generatedPass
    }
  }
}
});

//loop for special characters to be added into generated pass 
function (passwordStringUpper, passworStringLower){
  for (var i; i> userNum; i++){
    generatedPass= passwordStringUpper[i] + passwordStringLower[i]
  }
}; 


    


