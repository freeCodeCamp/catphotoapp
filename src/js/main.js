var count = 0, // Keeping track of number of images
    userCats = [],
    jsonCats = {"cats":[{
      "id": "CamperCat",
      "likes": 34,
      "location": "Indoor",
      "tags": ["Coding","Guru","Ninja"],
      "title": "Camper Cat",
      "url": "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
      },
      {
      "id": "Cat-in-a-hat",
      "likes": 38,
      "location": "Indoor",
      "tags": ["Cute", "Hat", "Standing"],
      "title": "Cat-in-a-hat",
      "url": "https://s-media-cache-ak0.pinimg.com/564x/27/df/cc/27dfcc17a8cefe56c99277d63be0d815.jpg"
      },
      {
      "id": "FluffBall",
      "likes": 2,
      "location": "Outdoor",
      "tags":["Fluffy", "No-legs", "Ball", "Flying"],
      "title": "Fluff Ball",
      "url": "http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg"
      },
      {
      "id": "GrumpyCat",
      "likes": 5,
      "location": "Indoor",
      "tags": ["Grumpy", "Funny", "Famous"],
      "title": "Grumpy Cat",
      "url": "http://i.dailymail.co.uk/i/pix/2014/08/05/1407225932091_wps_6_SANTA_MONICA_CA_AUGUST_04.jpg"
      },
      {
      "id": "HappyCat",
      "likes": 100,
      "location": "Outdoor",
      "tags": ["Happy", "Winking", "Smiling"],
      "title": "Happy Cat",
      "url": "https://pbs.twimg.com/profile_images/2167035896/123cat_400x400.jpg"
      },
      {
      "id": "LaughingCat",
      "likes": 1,
      "location": "Indoor",
      "tags": ["laughing", "Funny", "Snicker"],
      "title": "Laughing Cat",
      "url": "http://blog.nekoflies.com/wp-content/uploads/2014/01/funny-cat.jpg"
      },
      {
      "id": "ScaredyCat",
      "likes": 2,
      "location": "Indoor",
      "tags": ["Hiding", "Cute", "Scared"],
      "title": "Scaredy Cat ",
      "url": "https://i.ytimg.com/vi/MG8KADiRbOU/maxresdefault.jpg"
      },
      {
      "id": "ShockedCat",
      "likes": 1,
      "location": "Indoor",
      "tags": ["What is THAT!?", "Shocked", "Funny"],
      "title": "Shocked Cat",
      "url": "https://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg"
      },
      {
      "id": "SleepingCat",
      "likes": 2,
      "location": "Indoor",
      "tags": ["Sleeping", "Cute", "Kitten"],
      "title": "Sleeping Cat",
      "url": "http://www.acuteaday.com/blog/wp-content/uploads/2012/09/sleeping-kitty-cat.jpg"
      }
    ]
    };
function identTitle(title){
      return title.replace(/\s+/g, '');
    }
var allCats = userCats.concat(jsonCats.cats);

function drawPage(){
  allCats.forEach(function(childSnapshot){
    writeHTML(childSnapshot);
});
}

function writeHTML(childSnapshot) {
      count++;
      if (count % 3 === 1) {
        $('.results').append('<div class="row">' + showData(childSnapshot) + '</div>');
      } else {
        $('.results > .row:last').append(showData(childSnapshot));
      }
      $('.materialboxed').materialbox();
  }

function  addACat(event) {
// prevent page refresh on form submit
  event.preventDefault();

   var url = $('#url').val(),
       tempTags = $('#tags').val(),
       tags = tempTags.split(',');
// check that an image has been uplaoded
       if(url.match(/(jpg|png|gif)$/i) && url.match(/^http/)){
            uploadCat(url);
          }
          else {
            return alert("Please supply a URL which leads directly to a GIF, JPG or PNG file for upload.");
          }
// add user uploaded cat to userCats
function uploadCat(url){
    var newCat = {
        "id": identTitle($('#title').val()),
        "title": $('#title').val(),
        "url": url,
        "location": $('input[name="location"]:checked').val(),
        "tags": tags,
        "likes": 1
      };
      userCats.push(newCat);
      $('.results').empty().append(drawPage());
      $('#addCatModal').closeModal();
  }
}

$('form').on("submit", function(e){
  addACat(e);
});

function showData(photo) {
  var html = '';
    html += '<div class="col s3 m4 s12"><div class="card ' + identTitle(photo.title) + '">';
    html += '<div class="card-image">';
    html += '<img class="materialboxed" src="' + photo.url + '" />';
    html += '<span class="card-title">' + photo.title + '</span>';
    html += '</div><div class="card-content">';
    html += '<p>Location: ' + photo.location + '</p>';
for(let t = 0; t <photo.tags.length; t++){
    html += '<span class="chip blue darken-2">' + photo.tags[t] + '</span>';
}
    html += '</div>';
    html += `<div class="card-action">`;
    html += `<button id="` + identTitle(photo.title) + `" class="waves-effect waves-light waves-blue blue darken-3 btn like"><i class="fa fa-thumbs-up"></i> <span class="likes_number">${photo.likes}</span></button>`;
    html += `</div>`;
    html += '</div></div>';
  return html;
}
$(document).ready(function(){
  // render cards on load
  drawPage();
  // Materialize initalization
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('select').material_select();
  $(".like").on('click', function(){
       var likeVal = $( this ).children( ".likes_number" ).text(),
           catId = $( this ).attr('id'),
           writeVal = parseInt(likeVal) + 1;

       for(var x = 0; x<allCats.length; x++){
         if(allCats[x].id === catId){
           allCats[x].likes = writeVal;
           alert(allCats[x].likes);
           return $('.results').empty().append(drawPage());
         }
       }
});
});
