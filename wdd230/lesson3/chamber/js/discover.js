
//discover page code
// const imagesToload = document.querySelectorAll("img[data-src]");

// const imgOptions = {
//     threshold: 0.5,
//     rootMargin: "0px 0px 50px 0px"
// };

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => { image.removeAttribute('data-src'); };
// };

// if ('intersectionObserver' in window) {
//     const imgObserver = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {

//         });
//     }, imgOptions);

//     imagesToload.forEach((img) => {
//         imgObserver.observe(img)
//     });
// }

// else {

// }


const image = document.querySelectorAll('img');
const pimages = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('[data-src]');
    if (!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    },
    {
        threshold: .5
    }
);

pimages.forEach(image => {
    io.observe(image);
})

function supriseMe() {
    let lastDate = localStorage.getItem('recentVisit');
    let newDate = Date.now();

    let dayDifference = Math.abs(newDate - lastDate);
    let actualDays = Math.floor(dayDifference / 1000 / 3600 / 24);
    if (actualDays < 2) {
        document.querySelector('.currentVisit').textContent = 'This is your first visit';
    }
    else {
        document.querySelector('#visit').textContent = "It's been " + actualDays + " since you last Visited";
    }
    localStorage.setItem('recentVisit', Date.now());
}


if (!localStorage.getItem('recentVisit')) {
        localStorage.setItem('recentVisit', Date.now());
       
    }
else {
    supriseMe();
}

