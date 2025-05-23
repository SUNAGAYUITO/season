
$(window).on('scroll', function () {
    $('.fadein').each(function () {
      const elemTop = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight + 100) {
        $(this).addClass('active');
      }
    });
  });

  // 初回ロード時にもチェック
  $(function () {
    $(window).trigger('scroll');
  });







 

$(function() {
    $('#recrut').on('click', function () {
        const form = $('#formContainer');
        if (form.hasClass('hidden')) {
          form
            .removeClass('hidden')
            .addClass('translate-y-0 opacity-100')
            .removeClass('translate-y-10 opacity-0');
        } else {
          form
            .addClass('translate-y-10 opacity-0')
            .removeClass('translate-y-0 opacity-100');
          setTimeout(() => form.addClass('hidden'), 500);
        }
      });
});



$(function() {
    $('#question').on('click', function () {
        const form = $('#formContainer2');
        if (form.hasClass('hidden')) {
          form
            .removeClass('hidden')
            .addClass('translate-y-0 opacity-100')
            .removeClass('translate-y-10 opacity-0');
        } else {
          form
            .addClass('translate-y-10 opacity-0')
            .removeClass('translate-y-0 opacity-100');
          setTimeout(() => form.addClass('hidden'), 500);
        }
      });
});