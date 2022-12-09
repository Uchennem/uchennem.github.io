const dateEl = document.getElementById('date');

const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const day = time.getDay();
const year = time.getFullYear();



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];


console.log(day)
console.log(month)
console.log(year)

document.querySelector('.year').textContent = year;

// This function creates a hamburger menu on clicking the side bar
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    console.log("it worked")
}
const clickChecker = document.getElementById("hamburger")
clickChecker.onclick = toggleMenu;
