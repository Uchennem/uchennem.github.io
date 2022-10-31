let date = new Date();

let currentdate = document.lastModified;
let year = date.getFullYear();



document.querySelector('.full_date').textContent = new Date().toDateString();
document.querySelector('.year').textContent = year;
document.getElementById('foot').textContent = `Last Updated: ${currentdate}`;

// This function creates a hamburger menu on clicking the side bar
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    console.log("it worked")
}
const clickChecker = document.getElementById("hamburger")
clickChecker.onclick = toggleMenu;

// This Displays banner on site on Monday and Tuesday
let dayNumber = date.getDay();
let banner = document.querySelector('#bannertext');

console.log(dayNumber);


if(dayNumber == 1 || dayNumber == 2){
    document.querySelector('#bannertext').
    style.display = 'block';
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// This does calculation for temp and wind chill

let temp = document.querySelector('#temp').textContent;
let speed = document.querySelector('#speed').textContent;
let chill;

if ((temp <= 50) || (speed > 3))
{
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
    document.querySelector('#chill').textContent = chill;
}

else{
    document.querySelector('#chill').textContent = 'N/A';
}
