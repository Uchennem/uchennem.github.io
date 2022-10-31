
//discover page code
const imagesToload = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src'); };
};

if ('intersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {

        });
    }, imgOptions);

    imagesToload.forEach((img) => {
        imgObserver.observe(img)
    });
}

else {

}


// const image = document.querySelectorAll('img');
// const pimages = document.querySelectorAll('[data-src]');

// function preloadImage(img){
//     const source = img.getAttribute('[data-src]');
//     if (!source) {
//         return;
//     }

//     img.src = source;
// }

// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 return;
//             } else {
//                 preloadImage(entry.target);
//                 io.unobserve(entry.target);
//             }
//         })
//     },
//     {
//         threshold: [.4]
//     }
// );

// pimages.forEach(image => {
//     io.observe(image);
// })


if (!localStorage.getItem('recentVisit')) {
    localStorage.setItem('recentVisit', Date.now());
    document.getElementById('currentVisit').textContent = 'This is your first ';
} else {
    setStyles();
}

function setStyles() {
    let lastDate = localStorage.getItem('recentVisit');
    let newDate = Date.now();

    let dayDifference = newDate - lastDate;
        console.log(dayDifference);
        let actualDays = Math.floor(dayDifference/1000/3600/24);

    document.getElementById('currentVisit').texContent = actualDays;

    localStorage.setItem('recentVisit', Date.now());
}