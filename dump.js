//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function() {}
};

$("document").ready(function() {
  app.init();

  // ****** ****** ****** ******
  // START Isotope Settings
  // ****** ****** ****** ******
  $(".filters ul li").click(function() {
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
      percentPosition: true,
      masonry: {
        columnWidth: ".all"
      }
    });
  }
  // ****** ****** ****** ******
  // END Isotope Settings
  // ****** ****** ****** ******
});

// ****** ****** ****** ******
// START Burger Menu
// ****** ****** ****** ******
// Select DOM Items
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuUl = document.querySelector(".menu-ul");
var navItems = document.querySelectorAll(".nav-item");
var overlay = document.querySelector(".overlay");
var body = document.querySelector("body");

// Set Initial State Of Menu
var showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("clicked");
    menu.classList.add("show");
    menuUl.classList.add("show");
    overlay.classList.add("show");
    // body.classList.add("overflow");
    // navItems.forEach(function(item) {
    //   return item.classList.add("show");
    // });

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("clicked");
    menu.classList.remove("show");
    menuUl.classList.remove("show");
    overlay.classList.remove("show");
    // body.classList.remove("overflow");
    // navItems.forEach(function(item) {
    //   return item.classList.remove("show");
    // });

    // Set Menu State
    showMenu = false;
  }
}

// ****** ****** ****** ******
// END Burger Menu
// ****** ****** ****** ******
// ****** ****** ****** ******
// START Typing Header
// ****** ****** ****** ******
var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",

  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
  loopCount: 3,
  startDelay: 500,
  backDelay: 2000
});
// ****** ****** ****** ******
//  END Typing Header
// ****** ****** ****** ******

AOS.init({
  offset: 200,
  duration: 600,
  easing: "ease-in-sine",
  delay: 300,
  once: true,
  disable: "mobile"
});
