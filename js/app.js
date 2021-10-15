wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  
  let screenHeight = $(window).height();
  // console.log(screenHeight);
  
  
  $(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    // console.log(currentPosition);
    if(currentPosition > screenHeight-100){
        $(".site-nav").addClass("site-nav-scroll");
    }else{
        $(".site-nav").removeClass("site-nav-scroll");
        setActive("Home");
    }
  });
  
  
  function setActive(current) {
  
    $(".nav-link").removeClass("current-section");
  
    $(`.nav-link[href='#${current}']`).addClass('current-section');
  
  }
  
  function navScroll() {
  
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
  
        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
    },{ offset:'0px' });
  
    currentSection.waypoint(function (direction) {
  
        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
  
    },{ offset:'-50px' });
  
  }
  
  navScroll();

  $('.navbar-toggler').click(
    ()=>{
    $('.navbar-toggler').hide();
    $('.navbar-toggler-cross').toggleClass('d-none')
  });

  $('.navbar-toggler-cross').click(()=>{
    $('.navbar-toggler-cross').toggleClass('d-none');
    $('.navbar-toggler').show();
  })

  $('.counter').counterUp({
    delay: 5,
    time: 3000
});



$('.venobox').venobox({
  framewidth : '400px',                            // default: ''
    frameheight: 'auto',                            // default: ''
    border     : '10px',                             // default: '0'
    bgcolor    : '#5dff5e',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    share      : ['facebook', 'twitter', 'download'] // default: []
}); 

// $(".show-sidebar-btn").click(function () {
//   $(".sidebar").animate({marginLeft:0});
// });
// $(".hide-sidebar-btn").click(function () {
//   $(".sidebar").animate({marginLeft:'-100%'});
// });


var bar = new ProgressBar.Line(progress1, {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 2800,
  color: '#3f3d56',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.6);

var bar = new ProgressBar.Line(progress2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 2800,
  color: '#3f3d56',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);

var bar = new ProgressBar.Line(progress3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 2800,
  color: '#3f3d56',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);

var bar = new ProgressBar.Line(progress4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 2800,
  color: '#3f3d56',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.6);

var bar = new ProgressBar.Line(progress5, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 2800,
  color: '#3f3d56',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.4);

function changeMode() {
  document.body.classList.toggle("night-mode");
  document.getElementById("modeIcon").classList.toggle("feather-sun");
  $('.Home').toggleClass('homeBack')
}



$(".project-slide").slick({
  arrows:false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
  ]
});


$(window).on("load",function () {
  $('.loader-container').fadeOut(500,function () {
      $(this).remove();
  });
});

$('.arrowDiv').click(function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})