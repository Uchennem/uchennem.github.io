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




if (!localStorage.getItem('recentVisit')) {
    localStorage.setItem('recentVisit', Date.now());
    document.querySelector('#Visit').textContent = 'This is your first visit';
       
    }
else {
    let lastDate = localStorage.getItem('recentVisit');
    let newDate = Date.now();

    let dayDifference = Math.abs(newDate - lastDate);
    let actualDays = Math.floor(dayDifference / 1000 / 3600 / 24);
    document.querySelector('#visit').textContent = "It's been " + actualDays + " days since your last Visit";
    localStorage.setItem('recentVisit', Date.now());
}

