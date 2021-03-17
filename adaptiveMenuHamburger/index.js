let menuBtn = document.querySelector('.yaro_menu_btn');
let menu =  document.querySelector('.menu')
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
menu.classList.toggle('active');
})