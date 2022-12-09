// This function creates a hamburger menu on clicking the side bar
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    console.log("it worked")
}
const clickChecker = document.getElementById("hamburger")
clickChecker.onclick = toggleMenu;


// This does calculation for temp and wind chill
let temp = document.querySelector('#temp').textContent;
let speed = document.querySelector('#speed').textContent;
let chill;

const timeEl = document.getElementById('time');
const dayName = document.getElementById('day')
const date = new Date();
const day = date.getDay();
const hour = date.getHours();
const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
const minutes = date.getMinutes();
const ampm = hour >= 12 ? 'PM' : 'AM'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
timeEl.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`;
dayName.innerHTML = days[day]

let newCity = document.getElementById("cityInput");
let cityName = document.getElementById("cityName");


document.querySelector('#searchBtn').addEventListener('click', e => {
    // if user pressed input button and input value is not null
    if (e.key == "Enter" || newCity.value != "") {
        GetWeather() 
        
        console.log(cityName.value);
        console.log(newCity.value);
    }
});

const GetWeather = async () => {

    if (newCity.Value != "") {
        cityName.innerHTML = newCity.value;
    }
    else {
        newCity.value = "asaba"
    }
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=bfd498807a1d14d42fbb52b98ae038ae`;
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
    document.querySelector('figcaption').textContent = desc;

    if ((farenheit <= 50) || (speed > 3))
    {
        chill = Math.round((35.74 + (0.6215 * farenheit))-(35.75 * Math.pow(speed,0.16)) + (0.4275*farenheit*Math.pow(speed,0.16)));
        document.querySelector('#chill').textContent = chill;
    }

    else{
        document.querySelector('#chill').textContent = 'N/A';
    }
};




