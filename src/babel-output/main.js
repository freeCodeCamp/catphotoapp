"use strict";

var config = {
  apiKey: "AIzaSyCfE30gSCycR0wl_l96DG5Ig2Ax6oYHPac",
  authDomain: "catphotoapp-6cab6.firebaseapp.com",
  databaseURL: "https://catphotoapp-6cab6.firebaseio.com",
  storageBucket: "catphotoapp-6cab6.appspot.com"
};
firebase.initializeApp(config);

var photosRef = firebase.database().ref("photos").orderByKey();
var count = 0; // Keeping track of number of images

photosRef.once("value").then(function (snapshot) {

  console.log(snapshot);

  snapshot.forEach(function (childSnapshot) {
    count++;
    if (count % 3 === 1) {
      $('.results').append('<div class="row">' + showData(childSnapshot.val()) + '</div>');
    } else {
      $('.results > .row:last').append(showData(childSnapshot.val()));
    }
    $('.materialboxed').materialbox();

    var identifier = childSnapshot.val().title.replace(/\s+/g, '');
    $("." + identifier + " .like").click(function () {
      // $(`.${identifier} .likes_number`).text(Number($(this).val()) + 1));
      firebase.database().ref('photos/' + childSnapshot.val().title).on('child_changed', function (snapshot) {
        $("." + identifier + " .likes_number").text(snapshot.val());
      });;
      writeLikes(childSnapshot.val().title);
    });

    // $(`.${childSnapshot.val().title} .delete`).click(function() {
    //   deletePhoto(childSnapshot.val().title);
    //   $(`.${childSnapshot.val().title}`).remove();
    // });
  });
});

$('.submit').click(function () {
  var url = $('#url').val(),
      tempTags = $('#tags').val(),
      tags = tempTags.split(',');

  if (url.match(/(jpg|png|gif)$/i) && url.match(/^http/)) {
    uploadCat(url);
  } else {
    return alert("Please supply a URL which leads directly to a GIF, JPG or PNG file for upload.");
  }

  function uploadCat(url) {
    firebase.database().ref('photos/' + $('#title').val()).set({
      title: $('#title').val(),
      url: url,
      location: $('input[name="location"]:checked').val(),
      tags: tags,
      likes: 1
    });
  };
});

function writeLikes(title) {
  firebase.database().ref('photos/' + title + '/likes').transaction(function (currentLikes) {
    return currentLikes + 1;
  });
}

// function deletePhoto(title) {
//   firebase.database().ref('photos/' + title).remove();
// }

function showData(photo) {
  var identifier = photo.title.replace(/\s+/g, '');
  var html = '';
  html += '<div class="col s3 m4 s12"><div class="card ' + identifier + '">';
  html += '<div class="card-image">';
  html += '<img class="materialboxed" src="' + photo.url + '" />';
  html += '<span class="card-title">' + photo.title + '</span>';
  html += '</div><div class="card-content">';
  html += '<p>Location: ' + photo.location + '</p>';
  html += '<p>Tags: ';

  for (var t = 0; t < photo.tags.length; t++) {
    html += '<span class="chip blue darken-2">' + photo.tags[t] + '</span>';
  }

  html += '</p></div>';
  html += "<div class=\"card-action\">";
  html += "<a class=\"waves-effect waves-light waves-blue blue darken-3 btn like\"><i class=\"fa fa-thumbs-up\"></i> <span class=\"likes_number\">" + photo.likes + "</span></a>";
  //  html += `<a class="waves-effect waves-light waves-blue blue darken-3 btn delete"><i class="fa fa-trash"></i> Delete</a>`;
  html += "</div>";
  html += '</div></div>';
  return html;
}

$(document).ready(function () {
  // Materialize initalization
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('select').material_select();
});