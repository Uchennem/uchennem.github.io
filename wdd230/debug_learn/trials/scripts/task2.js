let names = "Uche Oranye";
document.querySelector('#name').textContent = names
let date = new Date();

let currentdate = document.lastModified;
let year = date.getFullYear();

document.querySelector('#year').textContent = year;
document.getElementById('#year').textContent = `Last Updated: ${currentdate}`;