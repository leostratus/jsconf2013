/* Customized JS */
(function () {
  'use strict';

  // Horizontal business as usual
  bespoke.horizontal.from('article', {
    state: true,
    hash: true,
    bullets: true
  });

  // This shit because my Kensington presentation clicker wasn't programmable
  // Seriously I should have bought a Logitech

  // document.body.onclick = function(e) {
  //   bespoke.prev();
  //   return false;
  // }

  // document.oncontextmenu = function (e) { 
  //    bespoke.next();
  //    return false;
  // };

  // Since this talk was an early prototype of a slide deck framework I'm tweaking, it doesn't work well across all browsers. Poop. I know.
  var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  console.log(is_chrome)
  if (!is_chrome) {
    document.getElementById('warning').className += "animate-in";
    content = document.getElementsByClassName('content');
    for (var i = 0; i < content.length; i++) {
      content[i].style.padding = "300px inherit";
      content[i].style.margin = "0 auto";
    };
  };
})();