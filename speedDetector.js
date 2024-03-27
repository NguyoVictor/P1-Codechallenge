const prompt = require("prompt-sync")();
//this is the maximum allowed speed limit
const limit = 70;
let totalPoints = 0;
const demeritPoints = 12; //maximum points you need to have before your license is revocked
//license is revoked
const suspendMsg = "License Suspended"; //the license suspended message

//function that returns a message according to the speed
function getStatus() {
  while (totalPoints <= demeritPoints) {
    let speed = prompt("Enter the speed: "); //prompts to input the speed
    if (speed <= limit) {
      console.log("Ok");
      condition = prompt("Proceed?");
      if (
        condition.toLowerCase() === "yes"
      ) {
        continue; //starts all over if typed in yes
      } else {
        break;// the loop is discontinued
      }
    } else {
      let currentPoints = (speed - limit) / 5;
      totalPoints += currentPoints;
      if (totalPoints <= demeritPoints) {
        console.log(`Points: ${currentPoints}`);
        console.log(`Total Points: ${totalPoints}`);
        condition = prompt("Proceed? ");
        if (
          condition.toLowerCase() === "yes"
        ) {
          continue; //if the user chooses to continue the loop starts over
        } else {
          console.log(`Total Points: ${totalPoints}`); //logs total points
          break;
        }
      } else {
        console.log(`Points: ${currentPoints}`); //displays the points calculated from the speed that caused the total points to surpass the allowed demerit points
        console.log(`Total Points: ${totalPoints}`); //if the total points are more than the demerit points
        console.log(suspendMsg); // outputs the license suspended message
      }
    }
  }
}

getStatus();