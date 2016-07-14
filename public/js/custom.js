$(document).ready(function(){
  // Materialize initalization
  $(".button-collapse").sideNav();
  $(".modal-trigger").leanModal();
  $("select").material_select();
  // close addCatModal on submit
  $("#submit-btn").on('click', function(){
    $('#addCatModal').closeModal();
  });
});
