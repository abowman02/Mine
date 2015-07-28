$(function(){

  $('.menu-toggle').on('click', function(e){
    e.preventDefault();
    $('.menu').toggleClass('off');
  });

  $('.navicon').on('click', function() {
    $(this).toggleClass('open');
  });

});
