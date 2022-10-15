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

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');