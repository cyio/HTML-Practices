requirejs.config({    // 小括号+大括号
  paths: {    // 注意复数
    jquery: 'jquery-2.1.4.min'
  }
});

requirejs(['jquery', 'backtop'], function ($, backtop) {
//  new backtop.BackTop($('#backTop'), {
//    mode: 'move',
//    pos: 100,
//    speed: 2000
//  });
  
  $('#backTop').backtop({
    mode:'move'   
  });


  
//  var scroll = new scrollto.ScrollTo({
////    dest: 500,
////    speed: 2000
//  });
//  
////  $('body').css('background-color', 'red');
//  $('#backTop').on('click', $.proxy(scroll.move, scroll)); // 解决this指向
//  $(window).on('scroll', function () {
//    checkPosition($(window).height());
//  });
//  
//  checkPosition($(window).height())
//  
//  function move() {
//    $('html, body').animate({
//      scrollTop: 0
//    }, 800);
//  }
//  
//  function go() {
//    $('html, body').scrollTop(0);
//  }
//  
//  function checkPosition(pos) {
//    if ($(window).scrollTop() > pos) {
//      $('#backTop').fadeIn();
//    } else {
//      $('#backTop').fadeOut();
//    }
//  }
});