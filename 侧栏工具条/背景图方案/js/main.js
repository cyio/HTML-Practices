requirejs.config({    // 小括号+大括号
  paths: {    // 注意复数
    jquery: 'jquery-2.1.4.min'
  }
});

requirejs(['jquery'], function ($) {
//  $('body').css('background-color', 'red');
  $('#backTop').on('click', go);
  $(window).on('scroll', function () {
    checkPosition($(window).height());
  });
  
  checkPosition($(window).height())
  
  function move() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }
  
  function go() {
    $('html, body').scrollTop(0);
  }
  
  function checkPosition(pos) {
    if ($(window).scrollTop() > pos) {
      $('#backTop').fadeIn();
    } else {
      $('#backTop').fadeOut();
    }
  }
});