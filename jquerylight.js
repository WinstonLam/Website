function initMap() {
  var e = { lat: -25.344, lng: 131.036 },
    s = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: e,
    });
  new google.maps.Marker({ position: e, map: s });
}
function loader() {
  $(".loader-wrapper").fadeOut("slow");
}
function textAnimation() {
  $(".intro-text h1").css("animation", "reveal 1.5s");
  $(".intro-text p").css("animation", "fall 2s ease-in");
  $(".menu").css("animation", "drop 1.5s");
  $(".order").css("animation", "drop 1.5s");
}
function checkWidth() {
  $(window).width() < 751
    ? ($("#gallerydiv").removeClass("Active"),
      0 == $("#gallerydiv").siblings(".Active").length &&
        $("#gallerydiv_mobile").addClass("Active"))
    : ($("#gallerydiv_mobile").removeClass("Active"),
      0 == $("#gallerydiv").siblings(".Active").length &&
        $("#gallerydiv").addClass("Active"));
}
function activeGallery() {
  0 == $("#gallerydiv").siblings(".Active").length &&
    $("#gallerydiv_mobile").addClass("Active"),
    0 == $("#gallerydiv").siblings(".Active").length &&
      $("#gallerydiv").addClass("Active");
}
function dataBox() {
  $(window).width() < 751
    ? ($("#glassbutton1").attr("data-box", "gallerydiv_mobile"),
      $("#footer-link3").attr("data-for", "gallerydiv_mobile"))
    : ($("#glassbutton1").attr("data-box", "gallerydiv"),
      $("#footer-link3").attr("data-for", "gallerydiv"));
}
(window.onload = activeGallery),
  $(window).on("load resize", checkWidth),
  $(window).on("load resize", dataBox),
  $(window).on("load", loader),
  $(window).on("load", textAnimation),
  $(function () {
    $(".menu-div").on("click", ".menu-closer", function () {
      $("header").removeClass("hide"),
        $("main").css("filter", "blur(0) brightness(100%)"),
        $(".swiper-container.menu-swiper").removeClass("selected"),
        $(".menu-closer").removeClass("selected"),
        $("#menu-prev").removeClass("selected"),
        $("#menu-next").removeClass("selected");
    });
  }),

  $(function () {
    $("#glass-link").on(
      "click",
      "#glassbutton1,#glassbutton2,#glassbutton3,#glassbutton4",
      function () {
        var e = $(this).attr("data-box");
        $(this).addClass("Active").siblings().removeClass("Active"),
          $("#" + e)
            .addClass("Active")
            .siblings()
            .removeClass("Active");
      }
    );
  }),
  $(".hover").on("mouseleave", function () {
    $(this).removeClass("hover");
  }),
  $(function () {
    $("#footer-links").on("click", ".footer-link", function () {
      var e = $(this).attr("data-for");
      $("#" + e)
        .addClass("Active")
        .siblings()
        .removeClass("Active");
    });
  }),
  $(function () {
    $(".burgerbuttons").on("click", "#burger-link", function () {
      var e = $(this).attr("data-for"),
        s = document.getElementById("header");
      $("#" + e)
        .addClass("Active")
        .siblings()
        .removeClass("Active"),
        $("#transparent").removeClass("show"),
        $(s).removeClass("hide");
    });
  }),
  $(function () {
    $("#nav-links").on("click", "#nav-link", function () {
      var e = $(this).attr("data-for");
      console.log(e),
        $("#" + e)
          .addClass("Active")
          .siblings()
          .removeClass("Active");
    });
  }),
  $(function () {
    $(".socials").on("click", ".burger", function () {
      var e = $(this).attr("data-for"),
        s = document.getElementById("header");
      $("#" + e).addClass("show"), $(s).addClass("hide");
    });
  }),
  $(function () {
    $("#transparent").on("click", ".burger_in", function () {
      var e = $(this).attr("data-for"),
        s = document.getElementById("header");
      $("#" + e).removeClass("show"), $(s).removeClass("hide");
    });
  }),
  $(function () {
    $("#gallerydiv").on("click", "#radio_g", function () {
      var e = $(this).attr("data-for");
      console.log(e),
        $("#" + e).addClass("Active"),
        $("#" + e)
          .siblings()
          .removeClass("Active");
    });
  }),
  $(window).on("scroll", function () {
   
    if ($(window).scrollTop() > 4) {
      $("#header").addClass("active");
    };
    if ($(window).scrollTop() <= 4) {
      $("#header").removeClass("active");
    };
     
  });
