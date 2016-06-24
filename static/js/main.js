// var ref = new Firebase("https://catphotoapp.firebaseio.com/");
// var photosRef = ref.child('photos')
//
// photosRef.on("child_added", function(snap) {
//   $('.results').append(htmlDisplay(snap.val(), snap.key()));
//   $('.like' + ', .' + snap.key()).click(function() {
//     photosRef.child(snap.key()).transaction(function (likes) {
//       return (likes || 0) + 1;
//     });
//   });
//   $('.delete' + ', .' + snap.key()).click(function() {
//     photosRef.child(snap.key()).remove();
//     $(this).parent().parent().remove();
//   });
// });
//
// $('.submit').on("click", function(event) {
//     event.preventDefault();
//     if($('#title').val() != '' || $('#url').val() != ''){
//       photosRef.push({
//         title: $('#title').val(),
//         url: $('#url').val(),
//         location: $('input[type=radio]:checked').val(), // doesn't work
//         tag: $('option:checked').val(),
//         likes: 1 // need to add incrementation
//       })
//     }
//   });
//
// function htmlDisplay(photo, id){
//   console.log(photo);
//   var html = '';
//   html += '<div class="row"><div class="col s12 m7"><div class="card small">';
//     html += '<div class="card-image">';
//       html += '<img src="' + photo.url + '" />';
//       html += '<span class="card-title">' + photo.title + '</span>';
//     html += '</div><div class="card-content">';
//       html += '<p>Location: ' + photo.location + '</p>';
//       html += '<p>Tag: ' + photo.tag + '</p>';
//     html += '</div><div class="card-action">';
//       html += `<a class="waves-effect waves-light btn like ${id}"><i class="fa fa-thumbs-up"></i> ${photo.likes}</a>
//     <a class="waves-effect waves-light btn delete ${id}"><i class="fa fa-trash"></i> Delete</a>`;
//   html += '</div></div></div></div>';
//   return html;
// }

var config = {
  apiKey: "AIzaSyCfE30gSCycR0wl_l96DG5Ig2Ax6oYHPac",
  authDomain: "catphotoapp-6cab6.firebaseapp.com",
  databaseURL: "https://catphotoapp-6cab6.firebaseio.com",
  storageBucket: "catphotoapp-6cab6.appspot.com",
};
firebase.initializeApp(config);

var photosRef = firebase.database().ref("photos").orderByKey();
var count = 0; // Keeping track of number of images

photosRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      count++;
      if (count % 4 === 1) {
        $('.results').append('<div class="row">' + showData(childSnapshot.val()) + '</div>');
      } else {
        $('.results > .row:last').append(showData(childSnapshot.val()));
      }
      $('.materialboxed').materialbox();
      $('.like').click(function() {
        writeLikes(childSnapshot.val().title);
      });
    });
  });

$('.submit').click(function () {
  firebase.database().ref('photos/' + $('#title').val()).set({
    title: $('#title').val(),
    url: $('#url').val(),
    location: $('input[name="location"]:checked').val(),
    tags: $('#tags').val(),
    likes: 1
  });
});

function writeLikes(title) {
  firebase.database().ref('photos/' + title + '/likes').transaction(function(currentLikes) {
    return currentLikes + 1;
  });
}

function showData(photo) {
  var html = '';
  html += '<div class="col s3 m4 s12"><div class="card">';
    html += '<div class="card-image">';
      html += '<img class="materialboxed" src="' + photo.url + '" />';
      html += '<span class="card-title">' + photo.title + '</span>';
    html += '</div><div class="card-content">';
      html += '<p>Location: ' + photo.location + '</p>';
      html += '<p>Tags: ' + photo.tags + '</p>';
    html += '</div><div class="card-action">';
      html += `<a class="waves-effect waves-light btn like"><i class="fa fa-thumbs-up"></i> ${photo.likes}</a><a class="waves-effect waves-light btn delete"><i class="fa fa-trash"></i> Delete</a>`;
  html += '</div></div></div>';
  return html;
}

$(document).ready(function(){
  // Materialize initalization
  $('.modal-trigger').leanModal();
  $('select').material_select();
});
