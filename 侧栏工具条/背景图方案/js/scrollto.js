define(['jquery'], function ($) {
  function ScrollTo(opts) { // 构造函数首字大写
    this.opts = $.extend({}, ScrollTo.DEEFAULT, opts);
    this.$el = $('html, body');
  }
  ScrollTo.prototype.move = function () {
    this.$el.animate({
      scrollTop: this.opts.dest
    }, this.opts.speed);
  };
  ScrollTo.prototype.go = function () {
    this.$el.scrollTop(this.opts.dest)
  };
  ScrollTo.DEEFAULT = {
    dest: 0,
    speed: 800
  };
  
  return {
    ScrollTo: ScrollTo
  }
});