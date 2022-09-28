show();

function show() {
    console.log('Output for developer');
}

// function square(number) {
//    return number * number
// }
// document.getElementById('result').textContent = square(5);

// const square = function (number) {
//     return number * number;
// }

// Arrow function 
const square = (number) => {
    return number * number
}
document.getElementById('result').textContent = square(5);

// Array methods


const steps = ["one", "two", "three"];
function makeList(item) {
    const listElement = document.getElementById("myList");
    listElement.innerHTML += `<li>${item}</li>`;
}

steps.forEach(makeList);

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex;

myArray.forEach(function (item, index) {
    if (item === luckyNumber) {
        luckyIndex = index;
        console.log(luckyIndex);
    }
}
    );

    let array1 = [1, 4, 9, 16];
    let array2 = array1.map(item => item * 2);
    console.log(array2);
    console.log(array1);

const stepsHTML = steps.map(function (step) {
    return `<li>${step}</li>`;

});
