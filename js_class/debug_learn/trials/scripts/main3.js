const grades = ['A', 'B', 'A'];

function convertGrade(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } 
    else if (grade === 'B') {
        points = 3;
    }
    return points
}

const gpaPoints = grades.map(convertGrade)

console.log(gpaPoints);

const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item; 
});
let gpa = pointsTotal / gpaPoints.length;
console.log(gpa);

const words = ["watermelon", "Peach", "Apple", "Tomato", "Grape"];
const shortwords = words.filter(function (item) {
    return item.length < 6;
});

console.log(shortwords);

const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);

const numbs = [1, 2, 3, 4, 5];

document.querySelector('#output').textContent = numbs;
function getEvens(item) {
    if (item % 2 === 0) {
        return item;
    }
}