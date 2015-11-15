(function($) {
  function animate($img, imgs, index, onCompleted) {
    if(index < imgs.length) {
      $img.attr('src', 'img/' + imgs[index]);

      setTimeout(function() {
        animate($img, imgs, index + 1, onCompleted);
      }, 500);
    } else {
      setTimeout(onCompleted, 500);
    }
  }

  function preload(imgs) {
    $(imgs).each(function() {
      $(this).each(function() {
        $('<img/>').attr('src', 'img/' + this);
      });
    });
  }

  $(document).ready(function() {
    var $img = $(".content > img")
    , $button = $(".text button")
    , $download = $(".download")
    , $text = $(".text")
    , imgs = [['1_2.jpg', '1_3.jpg', '1_4.jpg', '1_5.jpg', '1_6.jpg',
               '1_7.jpg', '1_8.jpg', '1_9.jpg', '1_10.jpg', '1_11.jpg',
               '1_12.jpg', '1_13.jpg', '1_14.jpg', '1_15.jpg'],
              ['2_1.jpg', '2_2.jpg', '2_3.jpg', '2_4.jpg', '2_5.jpg',
               '2_6.jpg', '2_7.jpg', '3_1.jpg'],
              ['3_2.jpg', '3_3.jpg', '3_4.jpg', '3_5.jpg'],
              ['4_1.jpg', '4_2.jpg', '4_3.jpg', '4_4.jpg', '4_5.jpg',
               '4_6.jpg', '5_1.jpg'],
              ['5_2.jpg', '5_3.jpg', '5_4.jpg', '5_5.jpg', '5_6.jpg',
               '5_7.jpg', '5_8.jpg', '5_9.jpg']]
    , imgsIndex = 0;

    $button.click(function(e) {
      var onCompleted;
      e.preventDefault();
      $button.hide();

      if(imgsIndex == imgs.length - 1) {
        onCompleted = function() {
          $text.addClass('hidden-mobile');
          $download.show();
        };
      } else {
        onCompleted = function() {
          $button.show();
        };
      }

      animate($img, imgs[imgsIndex], 0, onCompleted);

      imgsIndex += 1;

      return false;
    });

    preload(imgs);
    preload([['ios.png', 'android.png']]);
  });
})(jQuery);
