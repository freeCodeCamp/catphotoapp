var count = 0; // Keeping track of number of images
var remote = {"cats":[
  {
    "id": "CamperCat",
    "likes": 34,
    "tags": ["Coding","Guru","Ninja"],
    "title": "Camper Cat",
    "url": "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
  },
  {
    "id": "Cat-in-a-hat",
    "likes": 38,
    "tags": ["Cute", "Hat", "Standing"],
    "title": "Cat-in-a-hat",
    "url": "https://s-media-cache-ak0.pinimg.com/564x/27/df/cc/27dfcc17a8cefe56c99277d63be0d815.jpg"
  },
  {
    "id": "FluffBall",
    "likes": 2,
    "tags":["Fluffy", "No-legs", "Ball", "Flying"],
    "title": "Fluff Ball",
    "url": "http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg"
  },
  {
    "id": "GrumpyCat",
    "likes": 5,
    "tags": ["Grumpy", "Funny", "Famous"],
    "title": "Grumpy Cat",
    "url": "http://i.dailymail.co.uk/i/pix/2014/08/05/1407225932091_wps_6_SANTA_MONICA_CA_AUGUST_04.jpg"
  },
  {
    "id": "HappyCat",
    "likes": 100,
    "tags": ["Happy", "Winking", "Smiling"],
    "title": "Happy Cat",
    "url": "https://pbs.twimg.com/profile_images/2167035896/123cat_400x400.jpg"
  },
  {
    "id": "LaughingCat",
    "likes": 1,
    "tags": ["laughing", "Funny", "Snicker"],
    "title": "Laughing Cat",
    "url": "http://blog.nekoflies.com/wp-content/uploads/2014/01/funny-cat.jpg"
  },
  {
    "id": "ScaredyCat",
    "likes": 2,
    "tags": ["Hiding", "Cute", "Scared"],
    "title": "Scaredy Cat ",
    "url": "https://i.ytimg.com/vi/MG8KADiRbOU/maxresdefault.jpg"
  },
  {
    "id": "ShockedCat",
    "likes": 1,
    "tags": ["What is THAT!?", "Shocked", "Funny"],
    "title": "Shocked Cat",
    "url": "https://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg"
  },
  {
    "id": "SleepingCat",
    "likes": 2,
    "tags": ["Sleeping", "Cute", "Kitten"],
    "title": "Sleeping Cat",
    "url": "http://www.acuteaday.com/blog/wp-content/uploads/2012/09/sleeping-kitty-cat.jpg"
  }
]};

var local = Lockr.get('cats'),
    initLocal,
    all;

function identTitle(title) {
  return title.replace(/\s+/g, '');
}
function noop(){}
function getStorage(cb){
  // ensure only runs once
  var getStorage = noop;
if (local) {
  all = local;
  } else {
    // add all cats to local storage. Can then save like changes for the user
  remote.cats.forEach(function(ourCat){
    initLocal = Lockr.sadd("cats", ourCat);
  });
  all = initLocal;
location.reload();
}
// draws page when cats are in local storage
  cb();
}

function drawPage() {
  all.forEach(function(childSnapshot) {
    showData(childSnapshot);
  });
}

function showData(childSnapshot) {
  count++;
  if (count % 3 === 1) {
    $('.results').append('<div class="row">' + writeHTML(childSnapshot) + '</div>');
  } else {
    $('.results > .row:last').append(writeHTML(childSnapshot));
  }

  $('.materialboxed').materialbox();
}

function addLocal(event) {
  // prevent page refresh on form submit
  event.preventDefault();

  var url = $('#url').val(),
      tempTags = $('#tags').val(),
      tags = tempTags.split(',');

  // check that an image has been uplaoded
  if (url.match(/(jpg|png|gif)$/i) && url.match(/^http/)){
      $('#url').removeClass('invalid');
      uploadCat(url);
    }else {
      return $('#url').addClass('invalid');
  }
  function uploadCat(url) {
    var newCat = {
      "id": identTitle($('#title').val()),
      "title": $('#title').val(),
      "url": url,
      "tags": tags,
      "likes": 1
    };
    var existingIds = [];
    for(var z = 0; z<all.length;z++){

      existingIds.push(all[z].id);
    }
    // Check to see if id exists
      if(existingIds.indexOf(newCat.id) === -1){
        // remove any invaild flags and upload the cat
       $('#title').removeClass('validate invalid');
       addVaildCat(newCat);
      }else{
        // stop form submit and flag invaild it user
        return $('#title').addClass('validate invalid');
      }
    }
}
function addVaildCat(validCat){
    // Adds newCat to local storage
    Lockr.sadd('cats', validCat, {Object});
    $('#addCatModal').closeModal();
    // location.reload();

    // Reset form fields
  //  $('form').reset(); Not working in chrome
}


$('form').on("submit", function(e){
  addLocal(e);
});

function writeHTML(photo) {
  var html = '';
    html += '<div class="col s3 m4 s12"><div class="card ' + photo.id + '">';
    html += '<div class="card-image">';
    html += '<img class="materialboxed" src="' + photo.url + '" />';
    html += '</div><div class="card-content">';
    html += '<h5>' + photo.title + '</h5>';
    for (let t = 0; t < photo.tags.length; t++) {
      html += '<span class="chip blue darken-2">' + photo.tags[t] + '</span>';
    }
    html += '</div>';
    html += `<div class="card-action">`;
    html += `<button id="` + photo.id + `" class="waves-effect waves-light waves-blue blue darken-3 btn like"><i class="fa fa-thumbs-up"></i> <span class="likes_number">${photo.likes}</span></button>`;
    html += `</div>`;
    html += '</div></div>';
  return html;
}

function incrementLikes(catLike$){
  var newLikes = parseInt(catLike$.children(".likes_number").text()) + 1;
  for (var x = 0; x < all.length; x++) {
    if (all[x].id === catLike$.attr('id')) {
      all[x].likes = newLikes;
    $('.results').empty().append(drawPage());
    }
  }
}

$(document).ready(function(){
  // get/init storage then draw page
  getStorage(drawPage);
  // Materialize initalization
  $(".button-collapse").sideNav();
  $(".modal-trigger").leanModal();
  $("select").material_select();
  //////////////////
  // for dev only //
  //////////////////
  // should clear local storage, but haven't got it working yet
  $('#flush').click(function(){
    Lockr.flush();
  });
  // increment likes
  $(".like").on('click', function() {
    incrementLikes($(this));
  });
});
