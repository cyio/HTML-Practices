define(['jquery'], function ($) {
  function ScrollTo(opts) { // 构造函数首字大写
    this.opts = $.extend({}, ScrollTo.DEEFAULT, opts);
    this.$el = $('html, body');
  }
  ScrollTo.prototype.move = function () {
    var opts = this.opts;
    var dest = opts.dest;
    
    if ($(window).scrollTop() != dest) {
      if (!this.$el.is(':animated')) {
//        console.log(1);
        this.$el.animate({
          scrollTop: dest
        }, opts.speed);

      }
    }
  };
  ScrollTo.prototype.go = function () {
    var dest = this.opts.dest
    if ($(window).scrollTop() != dest) {
      this.$el.scrollTop(dest);
    }
  };
  ScrollTo.DEEFAULT = {
    dest: 0,
    speed: 800
  };

  return {
    ScrollTo: ScrollTo
  }
});