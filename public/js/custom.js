/* global $ */

function main() {
  $('.button-collapse').sideNav();
  $('.modal-trigger').leanModal();
  $('select').material_select();
  // close addCatModal on submit
  $('#submit-btn').on('click', () => {
    if ($('#title').hasClass('valid') && $('#url').hasClass('valid')) {
      $('#addCatModal').closeModal();
    }
  });
}

$(document).ready(main);
