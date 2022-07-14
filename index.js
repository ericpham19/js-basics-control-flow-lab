
function scuberGreetingForFeet(feet) {
  // Write your code here!
  let result;
  if (feet <= 400) {
    result = "This one is on me!";
    return result;
  }
  if (feet > 2500) {
    result = "No can do.";
    return result;
  } else {
    result = "I will gladly take your thirty bucks.";
    return result;
  }
}




 function ternaryCheckCity(city) {
  
 return (city === "NYC") ? "Ok, sounds good." :"No go.";

 }

 
function switchOnCharmFromTip(amount){ 
  let response;
  switch (amount){
        case "generous":
          response = "Thank you so much.";
          break;
        case "not as generous":
          response = "Thank you.";
          break;
        default:
          response = "Bye."
          break;
    
  }
  return response;
}
