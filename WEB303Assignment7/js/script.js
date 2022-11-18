

$('.thumb').on('click', function(e) {
    var $link = $(this).attr('src');
    $('#photo-viewer img').attr('src', $link);
    $(this).addClass('activeimg').siblings().removeClass('activeimg');
  });
