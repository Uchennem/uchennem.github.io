//comparions

console.log(5==='5');

console.log(5<=9);

let yourAge = 19;

//conditions

if (yourAge > 17) {
    console.log('You can vote');
}
else {
    console.log('You cannot vote')
}



let randm = Math.random();

if (randm < .5) {
    console.log(randm);
    console.log('Tails');
}
else {
    console.log(randm);
    console.log('Heads');
}

document.querySelector('h1').textContent = "New Content";

document.querySelector('ul').innerHTML = "<li>List Item One</li><li>List Item Two</li>";


let newPara = document.createElement('p');
newPara.textContent = 'this is the text for my new para';
document.body.appendChild(newPara);


document.querySelector('img').setAttribute('src', 'imgs/Odogwu.jpg');


let classes = ['CSE121b', 'CIT111', 'WDD130', 'WDD230'];
console.log(classes);
classes[2] = 'WDD330';
console.log(classes);

document.querySelector('#courses');
textContent = classes.join('  ')

