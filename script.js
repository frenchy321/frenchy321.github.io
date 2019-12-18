// collapse-nav-links

$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});

// animated scroll

AOS.init();

// spin nav-icon

$(document).ready(function() {
  $('.nav-icon').mouseenter(function() {
    $(this).addClass('rotate');
  });
  $('.nav-icon').mouseleave(function() {
    $(this).removeClass('rotate');
  });
});
