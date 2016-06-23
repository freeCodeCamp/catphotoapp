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

// firebase.database().ref('photos').on('child_added', function(snapshot) {
//   // writePhoto(); // only for new
//   $('.results').append(showData(snapshot));
//   $('.delete').on('click', function () {
//     photosRef.remove();
//   });
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key();
//     // key === "fred"
//     return true;
//   });
// });


var photosRef = firebase.database().ref("photos").orderByKey();
photosRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      $('.results').append(showData(childData));
  });
});

$('.submit').on('click', function () {
  firebase.database().ref('photos/' + Math.floor(Math.random() * 500)).set({
    title: $('#title').val(),
    url: $('#url').val(),
    location: $('input[name="location"]:checked').val(),
    tags: $('#tags').val(),
    likes: 1
  });
});

function writeLikes(likes) {
  firebase.database().ref('photos/').transaction(function(currentLikes) {
    return currentLikes + 1;
  });
}

function showData(photo) {
  var html = '';
  html += '<div class="row"><div class="col s12 m7"><div class="card">';
    html += '<div class="card-image">';
      html += '<img src="' + photo.url + '" />';
      html += '<span class="card-title">' + photo.title + '</span>';
    html += '</div><div class="card-content">';
      html += '<p>Location: ' + photo.location + '</p>';
      html += '<p>Tags: ' + photo.tags + '</p>';
    html += '</div><div class="card-action">';
      html += `<a class="waves-effect waves-light btn like"><i class="fa fa-thumbs-up"></i> ${photo.likes}</a>
    <a class="waves-effect waves-light btn delete"><i class="fa fa-trash"></i> Delete</a>`;
  html += '</div></div></div></div>';
  return html;
}
