// navbar function

const frontNavbar = document.querySelector('.front-page-header');

if(frontNavbar){
  window.onscroll = function() {scrollFunction()};

}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".front-page-header").classList.add('navbar-scroll');
    document.querySelector(".front-page-header").classList.remove('navbar-first');
    document.querySelector('.brand-img').setAttribute('src','images/logo1.png');
    document.getElementById("myBtn").style.display = "block";
    //document.querySelector('.header-address').classList.add('d-none');
  } else {
    document.querySelector(".front-page-header").classList.remove('navbar-scroll');
    document.querySelector(".front-page-header").classList.add('navbar-first');
    document.querySelector('.brand-img').setAttribute('src','images/logo-transparent-header1.png');
    document.getElementById("myBtn").style.display = "none";
    //document.querySelector('.header-address').classList.remove('d-none');
  }
}

// show navbar and close navbar functions
let navbarBtn = document.querySelector('.navbar-btn');
let closeNavbarBtn = document.querySelector('.navbar-close-btn');
let navbarMenu = document.querySelector('.navbar-menu');
if(navbarBtn){
    navbarBtn.addEventListener('click', function(){
        navbarMenu.classList.add('show');
    });

    navbarMenu.addEventListener('click', function(e){
      if(e.target.classList.contains('navbar-menu')){
        navbarMenu.classList.remove('show');
      }
    });
}

if(closeNavbarBtn){
    closeNavbarBtn.addEventListener('click', function(){
        navbarMenu.classList.remove('show');
    });
}


// show search menu and close search menu functions
let searchBtn = document.querySelector('.search-btn');
let closeSearchBtn = document.querySelector('.search-close-btn');
let searchMenu = document.querySelector('.search-menu');
if(searchBtn){
    searchBtn.addEventListener('click', function(){
        searchMenu.classList.add('show');
    });

    searchMenu.addEventListener('click', function(e){
      if(e.target.classList.contains('search-menu')
       || e.target.classList.contains('row') 
       || e.target.classList.contains('col-md-8')){
        searchMenu.classList.remove('show');
      }
    });
}

if(closeSearchBtn){
    closeSearchBtn.addEventListener('click', function(){
        searchMenu.classList.remove('show');
    });
}

// scroll to top btn function
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//showcase slider

let sliderImages = document.querySelectorAll(".slide");

if(sliderImages){
  let arrowLeft = document.querySelector("#left-arrow"),
  arrowRight = document.querySelector("#right-arrow"),
  current = 0;
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  if(sliderImages[0]){
    sliderImages[0].style.display = "block";
  }
}

if(arrowLeft){
  arrowLeft.addEventListener('click', slideLeft);
}
if(arrowRight){
  arrowRight.addEventListener('click', slideRight);
}

// Show prev
function slideLeft() {
  reset();
  current--;

  if(current < 0){
    current = sliderImages.length - 1;
}
  sliderImages[current].style.display = "block";
  
}

// Show next
function slideRight() {
  reset();
  current++;
  if(current == sliderImages.length){
    current = 0;
  }
  if(sliderImages[current]){
    sliderImages[current].style.display = "block";
  }

  
}
 function slides() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  };

startSlide();

setInterval(slides, 15000);

}


let aboutShow = document.querySelector('.about-show');
let count = document.querySelectorAll('.count');

// $('.about-show').once({});
$.appear('#experience'); // It supports optional hash with "force_process" and "interval" keys. Check source code for details.

    // $('<div>test</div>').appear(); // It also supports raw DOM nodes wrapped in jQuery.

    $('#experience').one('appear', function(event, $all_appeared_elements) {
      // this element is now inside browser viewport

      
    
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          delay:1000,
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });


      // counter function for about us section

      
    });
    $('#experience').on('disappear', function(event, $all_disappeared_elements) {
      // this element is now outside browser viewport
    });




// testimonial swiper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // some scroll animations

  window.sr = ScrollReveal();

  sr.reveal('.newsletter-img-1',{
    duration:3000,
    origin:'top',
    distance:'300px',
  });

  sr.reveal('.newsletter-img-2',{
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.plans-img',{
    duration:3000,
    origin:'left',
    distance:'300px',
  });

  sr.reveal('.company-col',{
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.strength-col',{
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.partner-1',{
    duration:3000,
    origin:'left',
    distance:'300px',
  });

  sr.reveal('.partner-2',{
    duration:3000,
    origin:'right',
    distance:'300px',
  });

  sr.reveal('.represent-1',{
    duration:3000,
    origin:'left',
    distance:'300px',
  });

  sr.reveal('.represent-2',{
    duration:3000,
    origin:'right',
    distance:'300px',
  });

  sr.reveal('.customer-img-1',{
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.customer-img-2',{
    delay:1000,
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.customer-img-3',{
    delay:1500,
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.customer-img-4',{
    delay:2000,
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.customer-img-5',{
    delay:2500,
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.customer-img-6',{
    delay:3000,
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.customer-img-7',{
    delay:3500,
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });






  function initMap(){
    // Map options
    var options = {
      zoom:5,
      center:{lat:-3.3454,lng:35.6697}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    // google.maps.event.addListener(map, 'click', function(event){
    //   // Add marker
    //   addMarker({coords:event.latLng});
    // });

    /*
    // Add marker
    var marker = new google.maps.Marker({
      position:{lat:42.4668,lng:-70.9495},
      map:map,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
      content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
    */

    // Array of markers
    var markers = [
      {
        coords:{lat:-6.772340,lng:39.276150},
        content:'<h5>HQ - 369 Toure Drive, Kilwa House - ESBC, 1st Floor, Oysterbay, Dar es Salaam - Tanzania</h5>'
      },
      {
        coords:{lat:0.325960,lng:32.591200},
        content:'<h5>Rwenzori Tower, ESBC 5th Floor, Kampala - Uganda</h5>'
      },
      {
        coords:{lat:-1.940278,lng:29.873888},
        content:'<h5>Rwanda</h5>'
      }
    ];

    // Loop through markers
    for(var i = 0;i < markers.length;i++){
      // Add marker
      addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props){
      var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
      });

      // Check for customicon
      if(props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
      }

      // Check content
      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });

        marker.addListener('mouseover', function(){
          infoWindow.open(map, marker);
        });

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });

        marker.addListener('mouseout', function(){
          infoWindow.close(map, marker);
        });
      }
    }
  }

  