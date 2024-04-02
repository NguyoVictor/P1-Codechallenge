///initially we start with prompting the user to put in the marks

const prompt = require("prompt-sync")();
const studMarks = prompt("Enter the students marks: ");

//we now come up with a function that evaluates the grades
function studentGrade(marks) {
  //Creating an if statement
  if (marks > 79 && marks <= 100) {
    let grade = "A";
    console.log(`Grade: ${grade}`);
    return grade;
  } else if (marks >= 60 && marks <= 79) {
    let grade = "B";
    console.log(`Grade: ${grade}`);
    return grade;
  } else if (marks >= 49 && marks <= 59) {
    let grade = "C";
    console.log(`Grade: ${grade}`);
    return grade;
  } else if (marks >= 40 && marks < 49) {
    let grade = "D";
    console.log(`Grade: ${grade}`);
    return grade;
  } else if (marks < 40 && marks >= 0) {
    let grade = "E";
    console.log(`Grade: ${grade}`);
    return grade;
  } else {
    console.log("out of range");
  }
}

studentGrade(studMarks);
console.log(studMarks);

