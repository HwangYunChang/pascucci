$(document).ready(function(){
  $('.table .ham').click(function(){
      $('.table .table-menu').slideDown()
  })
  $('.table-menu .btn').click(function(){
      $('.table .table-menu').slideUp()
  });

  $('.goTop').click(function(e){
    e.preventDefault();
    $('html,body').stop(true).animate({scrollTop:0},1000)
});
});