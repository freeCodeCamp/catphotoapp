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
      $(`.${childSnapshot.val().title} .like`).click(function() {
        writeLikes(childSnapshot.val().title);
      });

      $(`.${childSnapshot.val().title} .delete`).click(function() {
        deletePhoto(childSnapshot.val().title);
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

function deletePhoto(title) {
  firebase.database().ref('photos/' + title).remove();
}

function showData(photo) {
  var html = '';
  html += '<div class="col s3 m4 s12"><div class="card ' + photo.title + '">';
    html += '<div class="card-image">';
      html += '<img class="materialboxed" src="' + photo.url + '" />';
      html += '<span class="card-title">' + photo.title + '</span>';
    html += '</div><div class="card-content">';
      html += '<p>Location: ' + photo.location + '</p>';
      html += '<p>Tags: ' + photo.tags + '</p>';
    html += '</div><div class="card-action">';
      html += `<a class="waves-effect waves-light waves-blue blue darken-3 btn like"><i class="fa fa-thumbs-up"></i> ${photo.likes}</a><a class="waves-effect waves-light waves-blue blue darken-3 btn delete"><i class="fa fa-trash"></i> Delete</a>`;
  html += '</div></div></div>';
  return html;
}

$(document).ready(function(){
  // Materialize initalization
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('select').material_select();
});
