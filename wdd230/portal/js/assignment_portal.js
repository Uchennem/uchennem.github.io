let date = new Date();

let currentdate = document.lastModified;
let year = date.getFullYear();

document.querySelector('.year').textContent = year;
document.getElementById('foot').textContent = `Last Updated: ${currentdate}`;