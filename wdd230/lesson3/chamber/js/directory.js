const requestURL = "https://uchennem.github.io/wdd230/lesson3/chamber/json/data.json";

async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);

    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);

        const businesses= jsObject['Business'];
        console.log(businesses[0].lastname);
        businesses.forEach(displayBusiness);
        businesses.forEach(displayBusinessList);
    }
};

getBusiness(requestURL);

function displayBusiness(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let img = document.createElement('img');

    h2.textContent = `${item.name}`;
    address.textContent = item.Address;
    phone.textContent = item.Phone;
    website.textContent = item.website;
    website.setAttribute('href', item.website);
    img.setAttribute('src', item.imageurl);
    website.setAttribute('class', 'sites');
    img.setAttribute('alt', `${item.name} logo`);

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    document.querySelector('.cards').appendChild
        (card);
};

function displayBusinessList(item) {
    let listView = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let img = document.createElement('img');
    

    h2.textContent = `${item.name}`;
    address.textContent = item.Address;
    phone.textContent = item.Phone;
    website.setAttribute('class', 'sites');
    website.textContent = item.website;
    website.setAttribute('href', item.website);
    img.setAttribute('src', item.imageurl);
    img.setAttribute('alt', `${item.name} logo`);
    
    listView.appendChild(h2);
    listView.appendChild(address);
    listView.appendChild(phone);
    listView.appendChild(website);
    document.querySelector('.list_view').appendChild
        (listView);
};

let gridBox = document.querySelector('.grid');
let listBox = document.querySelector('.list');
let list = document.querySelector('.list_view');
let grid = document.querySelector('.cards');
gridBox.addEventListener('click', showGrid);
function showGrid(){
  list.classList.add('displayNone');
  grid.classList.remove('displayNone');
}
listBox.addEventListener('click', showList);
function showList(){
  grid.classList.add('displayNone');
  list.classList.remove('displayNone');
}