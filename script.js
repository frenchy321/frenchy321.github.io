// animated scroll

AOS.init();

// collapse-nav-links

$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});

// spin nav-icon

$(document).ready(function() {
  $('.nav-icon').mouseenter(function() {
    $(this).addClass('rotate');
  });
  $('.nav-icon').mouseleave(function() {
    $(this).removeClass('rotate');
  });
});

// contact form

(function() {
  emailjs.init('user_gBxiiinGtZhVVi64oNJFj');
})();

var myform = $('form#github-contact');
myform.submit(function(event) {
  event.preventDefault();

  var params = myform.serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = 'default_service';

  var template_id = 'github_contact';
  myform
    .find('button')
    .text('Sending...')
    .attr('disabled', true);
  emailjs.send(service_id, template_id, params).then(
    function() {
      alert('Sent!');
      myform
        .find('button')
        .text('Send')
        .attr('disabled', false);
    },
    function(err) {
      alert('Send email failed!\r\n Response:\n ' + JSON.stringify(err));
      myform
        .find('button')
        .text('Send')
        .attr('disabled', false);
    }
  );

  return false;
});
