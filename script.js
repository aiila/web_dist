/* eslint-disable no-undef */
$('.mdl-layout__drawer a').click(function () {
    $('.mdl-layout__obfuscator').removeClass('is-visible');
    $('.mdl-layout__drawer').removeClass('is-visible');
  });
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('header').addClass("sticky");
    }
    else {
      $('header').removeClass("sticky");
    }
  });
  
  $(document).ready(function () {
    $('a[href*=#]').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body')
            .animate({ scrollTop: targetOffset }, 500);
          return false;
        }
      }
    });
  });