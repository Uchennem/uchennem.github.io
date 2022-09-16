let currentdate = document.lastModified;
document.querySelector('h3').textContent = currentdate;
document.getElementById('foot').textContent = `Last Updated: ${currentdate}`;