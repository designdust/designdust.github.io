//JQuery Module Pattern

// ****** ****** ****** ******
// DOCUMENT LOAD
// ****** ****** ****** ******

// An object literal
var appDocument = {
  init: function() {
    appDocument.burgerMenu();
    appDocument.isotope();
  },
  // ****** ****** ****** ******
  // START Burger Menu
  // ****** ****** ****** ******
  burgerMenu: function() {
    // Select DOM Items
    var menuBtn = document.querySelector(".menu-btn");
    var menu = document.querySelector(".menu");
    var menuUl = document.querySelector(".menu-ul");
    var overlay = document.querySelector(".overlay");

    var headerLogo = document.getElementById("header-logo");
    var menuLogo = document.getElementById("menu-logo");

    // var navItems = document.querySelectorAll(".nav-item");
    // var body = document.querySelector("body");

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
        headerLogo.classList.add("hide");
        menuLogo.classList.add("show");

        // * to hide scroll of the body when overflowing
        // body.classList.add("overflow");

        // * just a for each reference
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
        headerLogo.classList.remove("hide");
        menuLogo.classList.remove("show");

        // * to hide scroll of the body when overflowing
        // body.classList.remove("overflow");

        // * just a for each reference
        // navItems.forEach(function(item) {
        //   return item.classList.remove("show");
        // });

        // Set Menu State
        showMenu = false;
      }
    }
  },
  // ****** ****** ****** ******
  // START Isotope Settings
  // ****** ****** ****** ******
  isotope: function() {
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
        masonry: {
          columnWidth: ".all"
        }
      });
    }
  }

  // END Objects
};

$("document").ready(function() {
  appDocument.init();
});

// ****** ****** ****** ******
// WINDOW LOAD
// ****** ****** ****** ******

// An object literal
var appWindow = {
  init: function() {
    appWindow.preLoader();
    appWindow.typingHeadline();
  },
  // ****** ****** ****** ******
  // START Typing Headlines
  // ****** ****** ****** ******
  typingHeadline: function() {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",

      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
      loopCount: 3,
      startDelay: 3000,
      backDelay: 2000
    });
  },
  // ****** ****** ****** ******
  //  START AOS AND PRELOADER
  // ****** ****** ****** ******
  preLoader: function() {
    // Simple preLoader with AOS
    var preLoad = document.getElementById("preloader");

    function showPage() {
      preLoad.style.display = "none";
      // AOS Init
      AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in",
        delay: 1000,
        disable: "mobile"
      });
    }

    setTimeout(showPage, 8000);
  }
};

$(window).on("load", function() {
  appWindow.init();
});
