const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=bfd498807a1d14d42fbb52b98ae038ae";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    let kelvin = jsObject.main.temp;
    //(k - 273.15) * 1.8000 + 32.00
    let farenheit = (kelvin - 273.15) * 1.8 + 32;
    document.querySelector("#current-temp").textContent = Math.round(farenheit);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc
};

getWeather();