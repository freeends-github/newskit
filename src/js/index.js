// const swup = new Swup()
const menu = document.querySelector('.toggled-menu');
const menuButton = document.querySelector('#toggle-menu');
menuButton.addEventListener('click', function(){
  menu.style.display = 'block';
})