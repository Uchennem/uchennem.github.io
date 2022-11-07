// ASYNC AWAIT Fetch

const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);

    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);

        const prophets = jsObject['prophets'];
        console.log(prophets[0].lastname);
        prophets.forEach(displayProphets);
    }
};

getProphets(requestURL);

function displayProphets(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    h2.textContent = item.name + " " + item.lastname;

    card.appendChild(h2);
    document.querySelector('.cards').appendChild
        (card);
};