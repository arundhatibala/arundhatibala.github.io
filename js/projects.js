// var pageList = ["elert", "sirona", "absalom", "partition", "nomad", "spotify", "goodreads", "genart"]
// var IDlist = [1, 2, 3, 4, 5, 6, 7, 8];

$(document).ready(function(){
    $("#1").click(function(){
        $("#myCarousel").carousel(0);
      });
      $("#2").click(function(){
        $("#myCarousel").carousel(1);
      });
      $("#3").click(function(){
        $("#myCarousel").carousel(2);
      });
      $("#4").click(function(){
        $("#myCarousel").carousel(3);
      });
      $("#5").click(function(){
        $("#myCarousel").carousel(4);
      });
      $("#6").click(function(){
        $("#myCarousel").carousel(5);
      });
      $("#7").click(function(){
        $("#myCarousel").carousel(6);
      });
      $("#8").click(function(){
        $("#myCarousel").carousel(7);
      });
      $(".nextbtn").click(function(){
        $("#myCarousel").carousel('next');
      });
      $(".prevbtn").click(function(){
        $("#myCarousel").carousel('prev');
      });
});