


$(document).ready(function(){
  $(".nav_icon").click(function(){
    $(".sidebar").css("display", "block");
  })
  $(".close").click(function(){
    $(".sidebar").css("display", "none");
  })
  $(".get_involved").click(function(){
    $(".sidebar ul ul li").toggle();
  })
  $(".sidebar ul ul li a").click(function(){
    $(".sidebar ul ul li").toggle('hide');
  })
})
