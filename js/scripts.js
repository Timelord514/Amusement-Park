$(document).ready(function() {
  .submit(function() {
    const height = $("input#height-answer").val();

    if (height <= 36) {
      $('#under-36').show();
    } else {
      $('#over-36').show();}
  });
});