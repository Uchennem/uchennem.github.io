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


// This does calculation for temp and wind chill

let temp = document.querySelector('#temp').textContent;
let speed = document.querySelector('#speed').textContent;
let chill;

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2349276&appid=bfd498807a1d14d42fbb52b98ae038ae";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    let kelvin = jsObject.main.temp;
    let metrePerSec = jsObject.wind.speed;
    //(k - 273.15) * 1.8000 + 32.00
    let farenheit = (kelvin - 273.15) * 1.8 + 32;
    let speed = metrePerSec * 2.237;
    console.log(speed);
    document.querySelector("#temp").textContent = Math.round(farenheit);
    document.querySelector("#speed").textContent = Math.ceil(speed);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('.icon').textContent = iconsrc;
    document.querySelector('.icon').setAttribute('src', iconsrc);
    document.querySelector('.icon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc

    if ((farenheit <= 50) || (speed > 3))
{
    chill = Math.round((35.74 + (0.6215 * farenheit))-(35.75 * Math.pow(speed,0.16)) + (0.4275*farenheit*Math.pow(speed,0.16)));
    document.querySelector('#chill').textContent = chill;
}

else{
    document.querySelector('#chill').textContent = 'N/A';
}
};

getWeather()


