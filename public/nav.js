$(function() {
    $(".hamber_open").click(function(){
        $("nav").css("display","block");
        $(".hamber_open").hide();
        $(".hamber_close").show();
    })

    $(".hamber_close").click(function(){
        $("nav").css("display","none");
        $(".hamber_close").hide();
        $(".hamber_open").show();

    })
    $(document).ready(function (){
        $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
        });
      });
      
      //Scrolling Effect for nav
      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
          $('nav').addClass('black');
        } else {
          $('nav').removeClass('black');
        }
      });
});

