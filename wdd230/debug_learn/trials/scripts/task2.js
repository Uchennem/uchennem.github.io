let fullName = "Uche Oranye";
document.querySelector('#name').textContent = fullName

let date = new Date();
let year = date.getFullYear();

let imgName = 'images/akod.jpg';
document.querySelector('img').setAttribute('src', imgName);

document.querySelector('#year').textContent = year;

let favFoods = [' Egusi and Fufu', ' Yam and Tomato-Egg Sauce', ' Shawarma', 
' Banga and Catfish', ' Pepper Soup'];

document.getElementById('food').textContent = favFoods;

let oyiboFood = 'Fried Rice';
favFoods.push(oyiboFood);
document.getElementById('food').textContent = favFoods;

favFoods.splice(0,1);
document.getElementById('food').textContent = favFoods;

favFoods.splice(-1,1)
document.getElementById('food').textContent = favFoods;


