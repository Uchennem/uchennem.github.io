const image = document.querySelectorAll('img');

// const io = new IntersectionObserver((entries, io) => {
//     entries.forEach(entry => {
//         console.log(entries);
//     })
// },
//     {
//         threshold: [.5]
//     }
// );

image.forEach(image => {
io.observe(image);
})

const pimages = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }

    img.src = source;
}