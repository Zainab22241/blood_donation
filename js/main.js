

$(document).ready(function () {

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    loop: true,
    effect: 'coverflow',
    autoplay: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });

  ///////////////////////// WOW Animation ////////////////////////////////


  var wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: false,      // default
    }
  )
  wow.init();


});




document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var elements = document.querySelectorAll("#call-us h1, #call-us h4, #call-us h3");
    elements.forEach(function(element) {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = null;
    });
  }, 6000); // Restart every 2 seconds
});




document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var elements = document.querySelectorAll("#data");
    elements.forEach(function(element) {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = null;
    });
  }, 3000); // Restart every 2 seconds
});



document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var elements = document.querySelectorAll("#share");
    elements.forEach(function(element) {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = null;
    });
  }, 3000); // Restart every 2 seconds
});


document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var elements = document.querySelectorAll("#ROW");
    elements.forEach(function(element) {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = null;
    });
  }, 3000); // Restart every 2 seconds
});

 

document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var elements = document.querySelectorAll("#about");
    elements.forEach(function(element) {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = null;
    });
  }, 3000); // Restart every 2 seconds
});



document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var elements = document.querySelectorAll("#about-us");
    elements.forEach(function(element) {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = null;
    });
  }, 3000); // Restart every 2 seconds
});



document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    var elements = document.querySelectorAll("#head-img");
    elements.forEach(function(element) {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = null;
    });
  }, 3000); // Restart every 2 seconds
});

