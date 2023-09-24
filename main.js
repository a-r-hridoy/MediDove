// // Preloader area
var preloader = document.getElementById("preloader");
function preloder_function() {
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);

}
// // Preloader area

// cmn-select2 with image start
$(document).ready(function () {
    $('.cmn-select2-image').select2({
        templateResult: formatState,
        templateSelection: formatState
    });
});
// select2 function
function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};
function formatState(state) {
    if (!state.id) {
        return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $(
        '<span><img class="img-flag" /> <span></span></span>'
    );

    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find("span").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
};
// cmn-select2 with image end





// // Carousel area

// $('.sponsors').owlCarousel({
//     items:5,
//     loop:true,
//     margin:25,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:4
//         }
//     }
    
// });


// $('.testimonial').owlCarousel({
//     loop:true,
//     margin:25,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })




// $('.country').owlCarousel({
//     items:5,
//     loop:true,
//     margin:25 ,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:3
//         },
//         600:{
//             items:4
//         },
//         1000:{
//             items:5
//         }
//     }
    
// });

// // Carousel area



// $(document).ready(function () {
//     // code from https://code.mukto.info/counter-up-with-a-simple-jquery/
//         // Create new intersection observer
//         var observer = new IntersectionObserver(function (entries, observer) {
//         entries.forEach(function (entry) {
//             // If the element is in view, start counter animation
//             if (entry.isIntersecting) {
//             $(entry.target).prop("Counter", 0).animate(
//                 {
//                 Counter: $(entry.target).text(),
//                 },
//                 {
//                 duration: 4000,
//                 easing: "swing",
//                 step: function (now) {
//                     $(entry.target).text(Math.ceil(now));
//                 },
//                 }
//             );
//             // Stop observing the element to prevent duplicate animations
//             observer.unobserve(entry.target);
//             }
//         });
//         });
    
//         // Observe each .counterup element
//         $(".counterup").each(function () {
//         observer.observe(this);
//         });
//     });





const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
  el: '.swiper-scrollbar',
},    
});

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if (bar) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}



// medicine-counter-start
// $('.counter').counterUp({
//   delay: 10,
//   time: 2000
// });
// $('.counter').addClass('animated fadeInDownBig');

// medicine-counter-end

$(document).ready(function () {
  // code from https://code.mukto.info/counter-up-with-a-simple-jquery/
      // Create new intersection observer
      var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
          // If the element is in view, start counter animation
          if (entry.isIntersecting) {
          $(entry.target).prop("Counter", 0).animate(
              {
              Counter: $(entry.target).text(),
              },
              {
              duration: 4000,
              easing: "swing",
              step: function (now) {
                  $(entry.target).text(Math.ceil(now));
              },
              }
          );
          // Stop observing the element to prevent duplicate animations
          observer.unobserve(entry.target);
          }
      });
      });
  
      // Observe each .counterup element
      $(".counterup").each(function () {
      observer.observe(this);
      });
  });




// Initialise Carousel-start
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
 });
 
 // Thumbnails
 const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
       target: mainCarousel,
       friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: true,
 });
 
 // Customize Fancybox
 Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
       on: {
          change: (that) => {
             mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                friction: 0,
             });
          },
       },
    },
 });
 // Initialise Carousel-end