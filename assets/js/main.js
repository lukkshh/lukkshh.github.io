$(document).ready(function () {
  AOS.init();

  $("#preloader").hide();

  $(".header_text").map(function () {
    $(this).addClass("anm1");
  });

  var typed = new Typed("#typer", {
    strings: ["Luka Shvelidze", "Full-Stack Developer", "Python Developer"],
    typeSpeed: 50,
    loop: true,
  });

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

  $(window).scroll(function () {
    const scrollposY = window.scrollY;

    let ischecked = false;

    if (ischecked === false) {
      if (scrollposY > 350) {
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
