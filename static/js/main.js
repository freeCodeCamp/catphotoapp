var ref = new Firebase("https://catphotoapp.firebaseio.com/");
var photosRef = ref.child('photos')

var count = 0; // Keeping track of number of images

photosRef.on("child_added", function(snap) {
  console.log('Snap: ', snap)
  count++;
  // Wrapping all divs in groups of four 
  if (count%4 === 1) {
    console.log('if')
    newHTML = '<div class="row">' + htmlDisplay(snap.val(), snap.key()) + '</div>';
    $('.results').append(newHTML);
  } else {
    console.log('else')
    $('.results > .row:last').append(htmlDisplay(snap.val(), snap.key()));
  }
  $('.materialboxed').materialbox();
  // $('.btn-info' + ', .' + snap.key()).click(function() {
  //   photosRef.child(snap.key()).update({ likes: 2 });
  // });
  // $('.btn-danger' + ', .' + snap.key()).click(function() {
  //   photosRef.child(snap.key()).remove();
  //   $(this).parent().parent().remove();
  // });
  // ^^^ NEEDS REFACTORED FOR MATERIALIZE
});

$('.submit').on("click", function(event) {
    event.preventDefault();
    if($('#title').val() != '' || $('#url').val() != ''){
      photosRef.push({
        title: $('#title').val(),
        url: $('#url').val(),
        location: $('input[type=radio]:checked').val(), // doesn't work
        tag: $('option:checked').val(),
        likes: 1 // need to add incrementation
      })
    }
  });

function htmlDisplay(photo, id){
  var html = '';
  html += '<div class="col s3 m4 s12"><div class="card">';
    html += '<div class="card-image">';
      html += '<img class="materialboxed" src="' + photo.url + '" />';
      html += '<span class="card-title">' + photo.title + '</span>';
    html += '</div><div class="card-content">';
      html += '<p>Location: ' + photo.location + '</p>';
      html += '<p>Tag: ' + photo.tag + '</p>';
    html += '</div><div class="card-action">';
      html += `<a class="waves-effect waves-light btn"><i class="fa fa-thumbs-up"></i> ${photo.likes}</a>
    <a class="waves-effect waves-light btn ${id}"><i class="fa fa-trash"></i> Delete</a>`;
  html += '</div></div></div>';
  return html;
}


$(document).ready(function(){
  // Materialize initalization
  $('.modal-trigger').leanModal();
  $('select').material_select();
});
