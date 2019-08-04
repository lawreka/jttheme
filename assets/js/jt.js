$(document).ready(function(){
  $("#hamburger-menu").click(function(){
    $("#menu-container").toggleClass("hidden");
  });
  $("#antihamburger").click(function(){
      $("#menu-container").toggleClass("hidden");
    });
});
