(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 -
      (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 -
      (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 -
      (_mouseY - _h) * 0.06}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }
})();

$("#video1").click(function() {
  $("#player1").addClass("active");
});

$("#video2").click(function() {
  $("#player2").addClass("active");
});

$("#video3").click(function() {
  $("#player3").addClass("active");
});

$("#video4").click(function() {
  $("#player4").addClass("active");
});

$("#video5").click(function() {
  $("#player5").addClass("active");
});

$("#video6").click(function() {
  $("#player6").addClass("active");
});

$(".close").click(function() {
  removeActive();
});

$(".video-player-container").click(function() {
  removeActive();
});

let removeActive = () => {
  let players = document.getElementsByClassName("video-player-container");
  for (let i = 0; i < players.length; i++) {
    players[i].classList.remove("active");
  }
};

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: false,
    center: true,
    margin: 25,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});

$("#hamburger").click(function() {
  $("#hamburger").toggleClass("is-active");
  $("#menu-mob").toggleClass("show-menu");
});

$(".mob-link").click(function() {
  $("#hamburger").toggleClass("is-active");
  $("#menu-mob").toggleClass("show-menu");
});
