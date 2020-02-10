$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
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

