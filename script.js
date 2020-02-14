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

    $("p").on("click", function() {
        $(this).children('a').css('background-color', 'yellow');
   });

   $(".card_image").on("click", function() {
        $(this).next().children('p').slideDown();
   });

    $(".card_image").on("click", function() {
        $(this).siblings('p').slideDown();
   });

   $(".card").on("click", function() {
        $(this).toggleClass('card-highlight');
   });

   $("#select_btn").on("click", function() {
        $('.card:not(.card-highlight)').hide();;
   });

   $("#all_btn").on("click", function() {
        $('.card').show();
   });
   
   
}); 

