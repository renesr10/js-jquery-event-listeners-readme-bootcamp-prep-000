function getIt() {
  $('p').on("click", function(){
    alert('Hey!');
});
}
<<<<<<< HEAD

function frameIt() {
  $('img').on('load', function(){
  $('img').addClass('tasty');
});
}
=======

function frameIt() {
  $('img').on('load', function(){
  $('.tasty').append('img');
});
}

function pressIt() {
  
}

function submIt() {
   if ($( "input:first" ).val() === "") {
    alert('your form is going to be submitted now');
    return;
  }
}

$(document).ready(function(){
getIt();
>>>>>>> 8fd4352a9f1f5abd463099efe85aa123e6b95cdb

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});
}

function submitIt() {
$("form").on("submit", function() {
  if ($( "input:first" ).val() === "") {
    alert('Your form is going to be submitted now.');
    return;
  }
});
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt
});
