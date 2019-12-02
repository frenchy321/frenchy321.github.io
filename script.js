// show email

let show = document.querySelector('#show');

function showEmail() {
  document.querySelector('#show').style.display = 'block';

  return show;
}

// light box

$('#myModal').on('shown.bs.modal', function() {
  $('#myInput').trigger('focus');
});
