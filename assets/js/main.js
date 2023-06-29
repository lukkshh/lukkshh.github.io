$(document).ready(function () {
  AOS.init();

  const device_width = $("html").width();

  $("#preloader").hide();

  if (device_width < 601) {
    $(".card").slice(0, 2).show();
  } else {
    $(".card").slice(0, 6).show();
  }

  $(".header_text").map(function () {
    $(this).addClass("anm1");
  });

  var typed = new Typed("#typer", {
    strings: ["Luka Shvelidze", "Full-Stack Developer", "Python Developer"],
    typeSpeed: 50,
    loop: true,
  });

  typed.stop();

  const geo =
    "მე ვარ დამწყები დეველოპერი საქართველოდან, თავისუფალ დროს ვწერ კოდს, პროგრაპირების სწავლა დავიწყე როდესაც ვიყავი 16ის, მიყვარს bugების პოვნა და მათი გამოსწორება, მესმის სამი ენა: ქართული (მშობლიური), ინგლისური (Upper Intermediate), და რუსული (საბაზისო)";
  const eng =
    "I'm a junior developer from Georgia. In my free time, I'm coding. I started learning programming when I was 16, and I love searching for bugs and fixing them. I speak three languages: Georgian (Native), English (Upper Intermediate), and Russian (Basic).";

  $("#ge").click(function (e) {
    e.preventDefault();

    $("#about_content").text(geo);
  });

  $("#eng").click(function (e) {
    e.preventDefault();

    $("#about_content").text(eng);
  });

  $("#loadMore").on("click", function (e) {
    e.preventDefault();

    if (device_width < 600) {
      $(".card:hidden").slice(0, 2).slideDown();
    } else {
      $(".card:hidden").slice(0, 3).slideDown();
    }

    if ($(".card:hidden").length == 0) {
      $("#loadMore").css("display", "none");
    }
  });

  $(window).scroll(function () {
    const scrollposY = window.scrollY;

    let ischecked = false;

    if (ischecked === false) {
      if (scrollposY > 350) {
        typed.start();
        ischecked = true;
      }
    }

    if (scrollposY > 400) {
      $(".scroll_up").show();
      $(".scroll_up").addClass("anm3");
    } else {
      $(".scroll_up").hide();
      $(".scroll_up").removeClass("anm3");
    }
  });
});

function scrollup() {
  window.scroll(0, 0);
  window.location.hash = "";
}

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
