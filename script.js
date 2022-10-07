const button = document.querySelector('.button');
const form = document.querySelector('form');
const closeButton = document.querySelector('.close');

 button.addEventListener('click', () => {
    form.classList.add('form-on')
 });

 closeButton.addEventListener('click', () => {
    form.classList.remove('form-on')
 });