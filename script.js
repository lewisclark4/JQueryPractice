$(document).ready(function() {
   $(".stream-nav").on("click", function() {
    var allStreams = ".card";
    var thisStream = "." + this.id;
    
    $(allStreams).removeClass("card-highlight");
    $(thisStream).addClass("card-highlight");
});


   $("p").on("click", function() {
        $("p").css('color', 'red');
   });
   $("h2").hover(function() {
        $("h2").css('background-color', 'lightblue');
   });
   $("h2").hover(function(){
        $(this).css('font-size', '1.5em');
    }, function(){
        $(this).css('font-size', '1em');
    });
   $(".bottom_button").hover(function() {
        $("#container").css('background-color', 'black');
   }, function() {
        $("#container").css('background-color', 'grey');
   });

   $(".bottom_button").click(function() {
        $(this).siblings('p').slideToggle();
   });

    $(".bottom_button").hover(function() {
        $(this).fadeTo(100, 0.5);
   }, function() {
        $(this).fadeTo(100, 1);
   });
}); 

