let currentdate = document.lastModified;
document.querySelector('h1').textContent = currentdate;
document.getElementById('modified').textContent = `Last Updated: ${currentdate}`;