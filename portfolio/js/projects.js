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
