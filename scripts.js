(function ($) {

    $(document).ready(function () {

        $('#menu-hamburguer').on('focusout', function () {
            $(this).click();
        });

        $('.anchor-title').on('click', function (event) {
            event.preventDefault();
            let elemetPosition = $($(this).attr('href')).offset().top - parseInt($('#content').css('padding-top'));
            $('html, body').animate({
                scrollTop: elemetPosition
            }, 'slow');
        })

    });

})(jQuery);