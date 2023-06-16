$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
      $('.navbar-top').addClass("sticky");
    }
    else {
      $('.navbar-top').removeClass("sticky");
    }
  });