const ulist = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myChapters = input.value;
    input.value = '';

    const ulistItem = document.createElement('li');
    const ulistBtn = document.createElement('button');
    const ulistText = document.createElement('span');
    

    ulistItem.appendChild(ulistText);
    ulistText.textContent = myChapters;
    ulistItem.appendChild(ulistBtn);
    ulistBtn.textContent = '❌';
    ulist.appendChild(ulistItem);

    ulistBtn.addEventListener('click', () => {
        ulist.removeChild(ulistItem);
    });

    input.focus();
});