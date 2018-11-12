var sr = ScrollReveal()

var $ = document.querySelector.bind(document);
     var $on = document.addEventListener.bind(document);

     var xmouse, ymouse;
     $on('mousemove', function (e) {
          xmouse = e.clientX || e.pageX;
          ymouse = e.clientY || e.pageY;
     });

     var ball = $('#ball');
     var x = void 0,
          y = void 0,
          dx = void 0,
          dy = void 0,
          tx = 0,
          ty = 0,
          key = -1;

     var followMouse = function followMouse() {
          key = requestAnimationFrame(followMouse);
          if(!x || !y) {
               x = xmouse;
               y = ymouse;
          } else {
               dx = (xmouse - x) * 0.125;
               dy = (ymouse - y) * 0.125;
               if(Math.abs(dx) + Math.abs(dy) < 0.1) {
                    x = xmouse;
                    y = ymouse;
               } else {
                    x += dx;
                    y += dy;
               }
          }
          ball.style.left = x + 'px';
          ball.style.top = y + 'px';
     };
     const menuLink = document.querySelector('.menu');
     const container = document.querySelector('.container');
     const overlay = document.querySelector('.Overlay');
     
     menuLink.addEventListener("click", (e) => {
      
       container.classList.toggle('open');
       overlay.classList.toggle('open');
     })
     var animation = lottie.loadAnimation({
      container: document.getElementById('scroll-anim'), 
      path: './assets/js/animation-w19-h190.json', 
      renderer: 'svg/canvas/html', 
      loop: true,
      autoplay: true
    })
  
    sr.reveal('.cont2', { 
      delay: 100,
      viewFactor: 0.5,
      duration: 1900 
    });
sr.reveal('.left-text',{viewFactor: 0.5,duration: 1900});
sr.reveal('.right-text',{delay: 500,viewFactor: 0.5,duration: 1900});
sr.reveal('.photo',{delay:500, viewFactor: 0,duration: 1000});
sr.reveal('.photo2',{delay:500,viewFactor: 0,duration: 1000});
sr.reveal('.photo3',{delay:500,viewFactor: 0,duration: 1000}); 
// sr.reveal('.section-2',{});
sr.reveal('.mission',{delay:500});
sr.reveal('.mission-p',{delay:500});
