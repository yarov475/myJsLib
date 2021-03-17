let menuBtn = document.querySelector('.yaro_menu_btn');
let menu =  document.querySelector('.menu')
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
menu.classList.toggle('active');
})

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      } else{
          change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }