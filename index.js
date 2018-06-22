// Write your code in this file!

function scuberGreetingForFeet (number) {
  if (number <= 400) {
    return 'This one is on me!';
} else if (number > 2000 && number <= 2500) {
    return 'I will gladly take your thirty bucks.';
} else if (number > 2500) {
    return 'No can do.';
  }

}

function ternaryCheckCity (area) {
  return (area === 'NYC' ? 'Ok, sounds good.': 'No go.');
}

function switchOnCharmFromTip (expresion) {
  switch (tip) {
  case "generous":
    expresion = "Thank you so much.";
    break;
  case 'not as generous':
    expresion = "Thank you.";
    break;
  case 'thanks for everything':
    expresion = "Bye.";
    break;
}


