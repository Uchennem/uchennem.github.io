let date = new Date();

let currentdate = document.lastModified;
let year = date.getFullYear();

document.querySelector('.full_date').textContent = new Date().toDateString();
document.querySelector('.year').textContent = year;
document.getElementById('foot').textContent = `Last Updated: ${currentdate}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    console.log("it worked")
}

const clickChecker = document.getElementById("hamburger")
clickChecker.onclick = toggleMenu;