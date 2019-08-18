//JQuery Module Pattern

// ****** ****** ****** ******
// WINDOW LOAD
// ****** ****** ****** ******

// An object literal
var appWindow = {
  init: function() {
    appWindow.isotope();
    appWindow.movingLetters();
    appWindow.preLoader();
    appWindow.typingHeadline();
  },
  // ****** ****** ****** ******
  // START Anime JS
  // ****** ****** ****** ******
  movingLetters: function() {
    // Wrap every letter in a span
    $(".hero-title").each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
      );
    });

    anime.timeline({ loop: false }).add({
      targets: ".hero-title .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: function(el, i) {
        return 500 + 100 * i;
      }
    });
  },
  // ****** ****** ****** ******
  // START Typing Headlines
  // ****** ****** ****** ******
  typingHeadline: function() {
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
        offset: 50,
        duration: 500,
        easing: "ease-in",
        delay: 500,
        disable: "mobile"
      });
    }

    // setTimeout(showPage, 3000);
    showPage();
  }
};

$(window).on("load", function() {
  appWindow.init();
});

// ****** ****** ****** ******
// DOCUMENT LOAD
// ****** ****** ****** ******

// An object literal
var appDocument = {
  init: function() {
    appDocument.burgerMenu();
    appDocument.bootstrapTooltip();
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

    function hideMenu() {
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
        hideMenu();
      }
    }
  },
  // ****** ****** ****** ******
  // START Bootstrap Tooltip
  // ****** ****** ****** ******

  bootstrapTooltip: function() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  // END Objects
};

$("document").ready(function() {
  appDocument.init();
});

// ****** ****** ****** ******
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
}
//NOT THE MOST EFFICIENT PARALLAX, BUT SIMPLE

$(window).scroll(function(e) {
  parallax();
});
