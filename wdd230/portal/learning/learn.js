let x = 5;
let y = 4;
let multiply = x * y;
let subtract = x - y;
let attitude = "care";
let quantity = "less";
let stringAlong = attitude + quantity

console.log(multiply);
console.log(subtract);
console.log(stringAlong);

console.log(y === x);
console.log(y > x);
console.log(y != x);
console.log(x > 0 && x < 10);

function gpaPoints(grade) {
    let gpaPoints = 0;
    switch (grade) {
      case "A":
        gpaPoints = 4;
      // break removed
      case "B":
        gpaPoints = 3;
        break;
      case "C":
        gpaPoints = 2;
      default:
        gpaPoints = -1;
    }
    console.log(gpaPoints);
  }
  
  gpaPoints("A"); // returns 3!
  gpaPoints("B"); // also returns 3
  gpaPoints("C"); // returns -1!
  gpaPoints("X"); // returns -1

function gpa_break(grader) {

    //let grader = "A";
    let gpaPoints = 0;
    switch (grader) {
    case "A":
        gpaPoints = 4;
        break;
    case "B":
        gpaPoints = 3;
        break;
    default:
        gpaPoints = -1;
    }    
    console.log(gpaPoints);

}

gpa_break("A"); // returns 3!
gpa_break("B");


const body = document.body;
body.append("Hello World.", " I am learning");

const div = document.createElement('div');
body.appendChild(div);
div.innerText = "The Child is the father of the man"
//div.textContent = "A bad Son of a  Good Father"

console.log(spanHi.id)
