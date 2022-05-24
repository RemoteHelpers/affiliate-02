(function ($) {
  "use strict";

  //===== 01. Main Menu
  function mainMenu() {
    // Variables
    var var_window = $(window),
      switchOn = $(".js-switch-on-btn"),
      navContainer = $(".header-navigation"),
      navbarToggler = $(".navbar-toggler"),
      navMenu = $(".nav-menu"),
      closeIcon = $(".navbar-close");
    // navbar toggler
    navbarToggler.on("click", function () {
      navMenu.on("click", function (e) {
        e.preventDefault();
        if (e.target.className !== "nav-menu menu-on") {
          navMenu.removeClass("menu-on");
          navbarToggler.removeClass("active");
        }
      });
      navbarToggler.toggleClass("active");
      navMenu.toggleClass("menu-on");
    });
    // close icon
    closeIcon.on("click", function () {
      navMenu.removeClass("menu-on");
      navbarToggler.removeClass("active");
    });
    // adds toggle button to li items that have children
    navMenu.find("li a").each(function () {
      if ($(this).next().length > 0) {
        $(this)
          .parent("li")
          .append(
            '<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>'
          );
      }
    });
    // expands the dropdown menu on each click
    navMenu.find("li .dd-trigger").on("click", function (e) {
      e.preventDefault();
      $(this).parent("li").children("ul").stop(true, true).slideToggle(350);
      $(this).parent("li").toggleClass("active");
    });
    // check browser width in real-time
    function breakpointCheck() {
      var windoWidth = window.innerWidth;
      if (windoWidth <= 1199) {
        navContainer.addClass("breakpoint-on");
      } else {
        navContainer.removeClass("breakpoint-on");
      }
    }
    breakpointCheck();
    var_window.on("resize", function () {
      breakpointCheck();
    });
  }

  // Document Ready
  $(document).ready(function () {
    mainMenu();
  });
  // Panel Widget
  var panelClose = $(".panel-close"),
    contactUs = $(".phon-column"),
    panelWrap = $(".offcanvas-panel");
  contactUs.on("click", function (e) {
    e.preventDefault();
    panelWrap.toggleClass("panel-on");
  });
  panelClose.on("click", function (e) {
    e.preventDefault();
    panelWrap.removeClass("panel-on");
  });
  panelWrap.on("click", function (e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      panelWrap.removeClass("panel-on");
    }
  });
  //===== Prealoder
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut("500");
  });

  //===== Sticky
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
      $(".header-navigation").removeClass("sticky");
    } else {
      $(".header-navigation").addClass("sticky");
    }
  });

  //===== Magnific-popup js
  $(".video-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });
  $(".img-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //===== Back to top
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  //==== slick slider
  $(document).ready(function () {
    $(".swiper-wrapper").slick({
      arrows: false,
      speed: 500,
      autoplay: true,
      touchThreShold: 10,
      waitForAnimate: false,
      centerMode: true,
      variableWidth: true,
      pauseOnHover: false,
    });
  });

  //   counter js
  $(".counter").counterUp({
    delay: 80,
    time: 4000,
  });

  //===== Isotope js
  $(".masonry-grid-section").imagesLoaded(function () {
    // items on button click
    $(".portfolios-list").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    // menu active class
    $(".portfolios-list li").on("click", function (e) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });
    var $grid = $(".masonry-row").isotope({
      itemSelector: ".portfolio-column",
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      },
    });
  });

  //===== nice-select
  $("select").niceSelect();

  $("a.page_scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      scrollToPosition(hash);
    }
  });
  function scrollToPosition(hash) {
    //Initialize Active Class
    $("body,html").animate(
      {
        start: function () {},
        scrollTop: $(hash).offset().top,
      },
      1000,
      function () {
        window.location.hash = hash;
      }
    );
  }

  // Wow js
  new WOW().init();
})(window.jQuery);
