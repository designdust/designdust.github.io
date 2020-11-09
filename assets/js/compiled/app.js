"use strict";

//JQuery Module Pattern
// ****** ****** ****** ******
// WINDOW LOAD
// ****** ****** ****** ******
// An object literal
var appWindow = {
  init: function init() {
    appWindow.preload();
    appWindow.isotope();
    appWindow.typingHeadline();
    appWindow.gsapAnimations();
  },
  preload: function preload() {
    var preLoad = document.getElementById("preloader");
    preLoad.style.display = "none";
  },
  // ****** ****** ****** ******
  // START Typing Headlines
  // ****** ****** ****** ******
  typingHeadline: function typingHeadline() {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      backSpeed: 80,
      loop: true,
      loopCount: 1,
      startDelay: 2500,
      backDelay: 1500
    });
  },
  // ****** ****** ****** ******
  // START Isotope Settings
  // ****** ****** ****** ******
  isotope: function isotope() {
    $(".filters ul li").on("click", function () {
      $(".filters ul li").removeClass("active");
      $(this).addClass("active");
      var data = $(this).attr("data-filter");
      $grid.isotope({
        filter: data
      });
    });

    if (document.getElementById("portfolio")) {
      var $grid = $(".grid").isotope({
        itemSelector: ".all",
        masonry: {
          columnWidth: ".all"
        }
      });
    }
  },
  // ****** ****** ****** ******
  //  START GSAP
  // ****** ****** ****** ******
  gsapAnimations: function gsapAnimations() {
    // Cursor Circle
    var $circle = $(".circle"),
        $follow = $(".circle-follow");

    function moveCircle(e) {
      TweenLite.to($circle, 0.3, {
        x: e.clientX,
        y: e.clientY
      });
      TweenLite.to($follow, 0.7, {
        x: e.clientX,
        y: e.clientY
      });
    }

    function hoverFunc(e) {
      TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 0
      });
      TweenLite.to($follow, 0.3, {
        scale: 3
      });
    }

    function unhoverFunc(e) {
      TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 1
      });
      TweenLite.to($follow, 0.3, {
        scale: 1
      });
    }

    $(window).on("mousemove", moveCircle);
    $("a").hover(hoverFunc, unhoverFunc);

    if (innerWidth > 960) {
      window.onload = function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.heading').forEach(function (el) {
          gsap.from(el, {
            y: 50,
            duration: 1.5,
            // autoAlpha: 0,
            scrollTrigger: {
              trigger: el,
              // markers: true,
              scrub: 1,
              toggleActions: "restart pause reverse pause"
            }
          });
        });
        var textHl = gsap.utils.toArray('.text-reveal');
        textHl.forEach(function (el) {
          var textBg = el.querySelector(".text-reveal-bg");
          var textHl = el.querySelector(".text-el");
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom" // markers: true,

            }
          });
          tl.to(textBg, .5, {
            ease: "expo.out",
            scaleX: 1
          }).to(textHl, {
            opacity: 1
          }).to(textBg, .5, {
            ease: "expo.out",
            scaleX: 0
          });
        });
        gsap.from(".hero .container", {
          scale: .8,
          transformOrigin: "left center",
          ease: "expo",
          scrollTrigger: {
            trigger: ".hero .container",
            start: "center center",
            end: "center top",
            // pin: true,
            scrub: 0.5
          }
        });
        gsap.to(".ring--left", {
          scale: 1.5,
          ease: "power4",
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: ".ring--left",
            start: "center+=100% center",
            end: "bottom+=300 top",
            pin: true,
            scrub: 0.25
          }
        });
        gsap.to(".ring--right", {
          scale: .8,
          ease: "power4",
          transformOrigin: "center",
          scrollTrigger: {
            trigger: ".ring--right",
            start: "200px top",
            end: "bottom+=300 200px",
            // pin: true,
            scrub: 0.25
          }
        }); // Portfolio

        ScrollTrigger.batch(".all", {
          // interval: 0.1, // time window (in seconds) for batching to occur. 
          // batchMax: 3,   // maximum batch size (targets)
          onEnter: function onEnter(batch) {
            return gsap.to(batch, {
              autoAlpha: 1,
              stagger: 0.1
            });
          } // also onLeave, onEnterBack, and onLeaveBack
          // also most normal ScrollTrigger values like start, end, etc.

        });
      };
    }
  }
};
$(window).on("load", function () {
  appWindow.init();
}); // ****** ****** ****** ******
// DOCUMENT LOAD
// ****** ****** ****** ******
// An object literal

var appDocument = {
  init: function init() {
    appDocument.burgerMenu();
    appDocument.bootstrapTooltip();
  },
  // ****** ****** ****** ******
  // START Burger Menu
  // ****** ****** ****** ******
  burgerMenu: function burgerMenu() {
    // Select DOM Items
    var menuBtn = document.querySelector(".menu-btn");
    var menu = document.querySelector(".menu");
    var menuUl = document.querySelector(".menu-ul");
    var overlay = document.querySelector(".overlay");
    var headerLogo = document.getElementById("header-logo");
    var menuLogo = document.getElementById("menu-logo"); // var navItems = document.querySelectorAll(".nav-item");
    // var body = document.querySelector("body");
    // Set Initial State Of Menu

    var showMenu = false;
    menuBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    function hideMenu() {
      menuBtn.classList.remove("clicked");
      menu.classList.remove("show");
      menuUl.classList.remove("show");
      overlay.classList.remove("show");
      headerLogo.classList.remove("hide");
      menuLogo.classList.remove("show"); // * to hide scroll of the body when overflowing
      // body.classList.remove("overflow");
      // * just a for each reference
      // navItems.forEach(function(item) {
      //   return item.classList.remove("show");
      // });
      // Set Menu State

      showMenu = false;
    }

    menu.addEventListener("click", handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        hideMenu();
      }
    }

    function toggleMenu() {
      if (!showMenu) {
        menuBtn.classList.add("clicked");
        menu.classList.add("show");
        menuUl.classList.add("show");
        overlay.classList.add("show");
        headerLogo.classList.add("hide");
        menuLogo.classList.add("show"); // * to hide scroll of the body when overflowing
        // body.classList.add("overflow");
        // * just a for each reference
        // navItems.forEach(function(item) {
        //   return item.classList.add("show");
        // });
        // Set Menu State

        showMenu = true;
      } else {
        hideMenu();
      }
    }
  },
  // ****** ****** ****** ******
  // START Bootstrap Tooltip
  // ****** ****** ****** ******
  bootstrapTooltip: function bootstrapTooltip() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  } // END Objects

};
$(function () {
  appDocument.init();
}); // ****** ****** ****** ******
// WINDOW SCROLL
// ****** ****** ****** ******
//PARALLAX FUNCTION

function parallax() {
  var winScroll = $(window).scrollTop();
  var maxWidth = window.matchMedia("(max-width: 990px)");

  if (maxWidth.matches) {
    // If media query matches
    $(".parallax").css("top", -(winScroll * 0.015) + "px");
  } else {
    $(".parallax").css("top", -(winScroll * 0.025) + "px");
  }
} //NOT THE MOST EFFICIENT PARALLAX, BUT SIMPLE


$(window).scroll(function (e) {
  parallax();
});