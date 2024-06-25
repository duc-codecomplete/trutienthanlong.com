var widthWD;
var heightWD;

$(document).ready(function () {
  widthWD = jQuery(window).width();
  heightWD = jQuery(document).height();
  
  var swiper = new Swiper('.header-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  new Swiper('.banner-slider', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  // Call Popup Enter site
  // showPopup('popup-entersite');


  /*---- Top Button -----*/
  jQuery('.top').click(function () {
    jQuery('html, body').animate({ scrollTop: 0 }, 300);
  });
  /*---- End Top Button -----*/

  jQuery(document).on('click', '.icons-play-btn, .giftcode', function (event) {
    showPopup(jQuery(this).attr('data-rel'));
  })

  /*- Fancy box -*/
  jQuery(".fancybox").fancybox({
    type: "iframe",
    padding: 0,
    fitToView: false,
    width: '100%',
    height: '100%',
    openEffect: 'true',
    closeEffect: 'true',
    autoplay: 'true'
  });

  $.js = function (el) {
    return $('[data-js=' + el + ']')
  };
  
  if (jQuery('select').length > 0) {
    jQuery('select').niceSelect();
    // jQuery(".list").niceScroll({
    //   cursorcolor: "#4a5f7c",
    //   cursorwidth: "5px"
    // });
  }

  
  /* List server */
  var serverTab = new Swiper('.server-slider-tabs', {
    spaceBetween: 0,
    slidesPerView: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.server-button-next',
      prevEl: '.server-button-prev',
    }
  });
  
  var serverSlider = new Swiper('.server-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.server-next',
      prevEl: '.server-prev',
    },
    thumbs: {
      swiper: serverTab
    }
  });

  /*--- Event slider ---*/
  new Swiper('.event-slider', {
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 5000,
    // },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true, // false ma lai canh center
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 200,
      depth: 250, // scale hinh theo deep
      modifier: 1,
      slideShadows: false,
    },
    navigation: { // Navigation arrows
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    }
    
  });
})

function showPopup(object) {
  jQuery('body').append('<div class="bgover"></div>')
  // jQuery('.bgover').css({ 'width': widthWD, 'height': heightWD });
  jQuery("." + object).addClass('active').removeClass('hidden');
  jQuery(document).on('click', '.bgover,.close', function (event) {
    event.preventDefault();
    jQuery(".bgover").remove();
    jQuery("." + object).removeClass('active').addClass('hidden');
  });
}

jQuery(window).on('load', function () {

});