
 ;(function() {
    var throttle = function(type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function() {
    if (running) { return; }
    running = true;
    requestAnimationFrame(function() {
    obj.dispatchEvent(new CustomEvent(name));
    running = false;
    });
    };
    obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
    })();
  var star = document.getElementById('star');
 
  window.addEventListener("optimizedScroll", function(){
    star.style.transform = "rotate("+window.pageYOffset/10 + "1deg)"
   
  });