(function($) {
  "use strict";

    /*=========================
      JQuery Variables
      =========================*/

      var $window = $(window),
      $document = $(document),
      $html = $('html'),
      $body = $('body'),
      $pageLoader = $("#pageloader"),
      $toggleMenu = $('.menu-toggle'),
      $mainNav = $('.main-nav'),
      $BGYTPlayer = $('#bgndVideo'),
      $rippleBg = $('.ripples'),
      $navbarMenu = $('.navbar'),
      $shapeMove = $('.shapeParallex'),
      $shapeMoveRight = $('.shapeParallexRight'),
      $shapeMoveNagative = $('.shapeParallexNagative'),
      $scrollLink = $('.scroll'),
      $imageTilt = $('.tilt'),
      $progressbar = $('.progressbar'),
      $lastDots = $('.resume-content'),
      $counter = $('.counter'),
      $shapeParallex = $('.shapeParallex'),
      $portfolioGrid = $('.portfolio-grid'),
      $portfolioFilter = $('.portfolio-filter'),
      $portfolioGridItem = ('.portfolio-grid .item'),
      $imgLightbox = $('[data-fancybox]'),
      $testimonialSlider = $('.testimonial-slider'),
      $blogSlider = $('.blog-slider');

      /*=========================
       Demo Panel js
       =========================*/

       $(".theme-default").on("click", function(){
        $body.removeClass("theme-color-1 theme-color-2 theme-color-3 theme-color-4 theme-color-5")
      });
       $(".theme-color-1").on("click", function(){
        $body.addClass("theme-color-1").removeClass("theme-color-2 theme-color-3 theme-color-4 theme-color-5")
      });
       $(".theme-color-2").on("click", function(){
        $body.addClass("theme-color-2").removeClass("theme-color-1 theme-color-3 theme-color-4 theme-color-5")
      });
       $(".theme-color-3").on("click", function(){
        $body.addClass("theme-color-3").removeClass("theme-color-1 theme-color-2 theme-color-4 theme-color-5")
      });

       $(".theme-color-4").on("click", function(){
        $body.addClass("theme-color-4").removeClass("theme-color-1 theme-color-2 theme-color-3 theme-color-5")
      });

       $(".theme-color-5").on("click", function(){
        $body.addClass("theme-color-5").removeClass("theme-color-1 theme-color-2 theme-color-3 theme-color-4")
      });

       $(".spiner-btn").on("click", function(event){
        event.preventDefault();
        $('.demo-panel-box').toggleClass('open-demo-color')
      });

    /*=========================
      pageLoader js
      =========================*/

      $window.on('load', function() {
        setTimeout(function() {
          $pageLoader.fadeOut('slow');
        });
      });

      /*=========================
        easeScroll js
        =========================*/

        $html.easeScroll({
          frameRate: 60,
          animationTime: 1000,
          stepSize: 120,
          pulseAlgorithm: !0,
          pulseScale: 8,
          pulseNormalize: 1,
          accelerationDelta: 20,
          accelerationMax: 1,
          keyboardSupport: !0,
          arrowScroll: 50
        });

    /*=========================
      wow js
      =========================*/

      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 1,
        mobile: true,
        live: true
      }).init();

    /*=========================
        YTplayer js
        =========================*/
        $BGYTPlayer.YTPlayer();

    /*=========================
        ripples js
        =========================*/

        $rippleBg.ripples({
          resolution: 400,
          dropRadius: 15,
          perturbance: 0.2,
          interactive: true
        });

    /*=========================
       move shape bg js
       =========================*/

       $window.on("scroll", function() {
        moveIt('#about-me', $shapeMove, '1');
        moveIt('#about-me', $shapeMoveRight, '1');
        moveIt('#services', $shapeMoveRight, '1');
        moveIt('#services', $shapeMoveNagative, '-1')
      });

       function moveIt(mainClass, transformClass, sign) {
        if (typeof $(mainClass).position() != 'undefined') {
          var scrollHeight = $(mainClass).position().top;
          var scrollPosition = $window.scrollTop() + $(mainClass).prev().height();
          if ((scrollHeight - scrollPosition) <= 0 && (scrollHeight - scrollPosition) > -1 * scrollHeight) {
            var $movebg = sign * $window.scrollTop() * 0.2;
            transformClass.css('transform', 'translateY(' + ($movebg) + 'px' + ') ' + ' ' + ' rotate(' + ($movebg) + 'deg' + ')');
          }
        }
      }

    /*=========================
     smooth scroll menu js
     =========================*/

     /*---- Smooth scrolling ----*/
     $scrollLink.on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000, 'easeOutQuart');
    });

     /*---- Active link switching ----*/
     $window.on('scroll', function() {
      /*---- sticky navbar ----*/
      var windowTop = $window.scrollTop();
      windowTop > 60 ? $mainNav.addClass('navFixed') : $mainNav.removeClass('navFixed');

      /*---- scroll active ----*/
      var scrollbarLocation = $(this).scrollTop();
      $scrollLink.each(function() {
        if (typeof $(this.hash).offset() != 'undefined') {
          var sectionOffset = $(this.hash).offset().top - 100;
          if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        }
      });
    });
    /*=========================
       burger menu js
       =========================*/

       /*---- mobile menu ----*/
       /*---- desktop resize ----*/
       $window.on('resize', function() {
        if ($window.width() > 1024) {
          // window.location = window.location;
          $('body, .navbar li a').on('click', function() {
            $navbarMenu.slide().removeClass('nav-open');
          });
          
        } else if ($window.width() < 1024) {
          $('body').on('click', function() {
            $toggleMenu.removeClass('active');
            $navbarMenu.slideUp().removeClass('nav-open')
          });
        } else {
          $navbarMenu.slideDown().removeClass('nav-open')
        }
      });

       $window.on('load', function() {         
        if ($window.width() < 1024) {
          $('body').on('click', function() {
            $toggleMenu.removeClass('active');
            $navbarMenu.slideUp(300).removeClass('nav-open')
          });
        } 
        else {
          $navbarMenu.slideDown(300).removeClass('nav-open')
        }
      });

       $toggleMenu.on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $navbarMenu.slideToggle(300).toggleClass('nav-open')
      });

       $navbarMenu.on('click', function(e) {
        e.stopPropagation()
      });

    /*=========================
     stellar js
     =========================*/
     
     $document.on('ready', function(){
      if ($window.width() >= 1024) {
       $window.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
      });
     }
   });

    /*=========================
     tilt js
     =========================*/
     $imageTilt.tilt({
      glare: true,
      maxGlare: .9,
      maxTilt: 20,
      perspective: 1000,
      speed: 500,
      transition: true,
      disableAxis: null
    })

    /*=========================
     progress bar js
     =========================*/
     $('.circlechart').circlechart();
     
    /*=========================
     counter js
     =========================*/

     $counter.counterUp({
      time: 2000
    });

    /*=========================
      resume last dots js
      =========================*/
      $lastDots.prepend('<span class="last-dots"></span>');

    /*=========================
      isotope js
      =========================*/

      $portfolioGrid.imagesLoaded(function() {
        /*---- Filter List ----*/
        $portfolioFilter.on('click', 'button', function() {
          $portfolioFilter.find('button').removeClass('active');
          $(this).addClass('active');
          var $filterValue = $(this).attr('data-filter');
          $portfolioGrid.isotope({ filter: $filterValue })
        });
        /*---- Filter Grid ----*/
        $portfolioGrid.isotope({
          itemSelector: $portfolioGridItem,
          masonry: {
            columnWidth: $portfolioGridItem
          }
        });
      });

    /*=========================
     fancybox js
     =========================*/

     $imgLightbox.each(function() {
      $(this).attr("data-caption", $(this).attr("title"))
    });

     $imgLightbox.fancybox();

    /*=========================
    slick js
    =========================*/

    $testimonialSlider.slick({
      dots: false,
      infinite: true,
      autoplay: true,
      lazyLoad: 'progressive',
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      prevArrow: '<span class="fas prev-arrow fa-angle-left"></span>',
      nextArrow: '<span class="fas next-arrow fa-angle-right"></span>'
    });

    /*---- blog slider ----*/

    $blogSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      infinite: true,
      autoplay: true,
      lazyLoad: 'progressive',
      swipeToSlide: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });

  })(jQuery);