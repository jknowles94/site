$(document).ready(function(){
  $(".background").mouseenter(function(){
    $(".caption",this).slideDown("slow");
    $(".caption",this).css("display", "block");
  });

  $(".background").mouseleave(function() {
  	$(".caption").slideUp("slow");
  });
});