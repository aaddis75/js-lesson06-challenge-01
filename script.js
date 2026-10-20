//var startMyDay = function() {
    //return `Start with hot coffee and a shower!`;
//}

  //console.log(startMyDay())

//var favoriteCookie = function(cookie) {
    //return `My favorite cookie is ${cookie}.`;
  //}
  //console.log(favoriteCookie("choclate chip"));

  //var introduce = function(name, occupation) {
   // return `My name is ${name} and being ${occupation} is my occupation.`
  //}
  //console.log(introduce("Abby", "student"))
  //console.log(introduce("Karen", "an engineer"))

var hydrationFeedback = function() {
    var numGlasses = Number(prompt("How many glasses of water have you had today?"));
    if (numGlasses >= 8) {
        console.log("Good job!");
    }
else {
    console.log( "Not bad, not bad. Let's try for more tomorrow.");
}
   
}
hydrationFeedback ()
