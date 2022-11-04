const image = document.querySelectorAll('img');

// const io = new IntersectionObserver(
//     (entries, io) => {
//         entries.forEach(entry => {
//             console.log(entries);
//         })
        
//     }, 
//     {
//         threshold: [.5]
//     }
// )


// image.forEach(image =>{
//     io.observe(image);
// })

const pimages = document.querySelectorAll('[data-src]');
const options = {
    threshold: .5,
    rootMargin: '0px 0px 100px 0px'
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
        
    }, 
    
        options
    
);

pimages.forEach(image =>{
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

