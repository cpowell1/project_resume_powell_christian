$(document).ready(function () {
    $('.tabs').tabslet();
});

$(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 3000);
    });
});

$(document).ready(function () {
    $('button').one('click', function () {
        $('footer').append('<div><p>Email: christiant.powell@gmail.com</p><p>Phone: 555.555.5555</p></div>');
    });
});

$(document).ready(function () {
    $('.interestimg').hover(function () {
        $(this).css('opacity', '.5');
    }, function () {
        $(this).css('opacity', '1');
    });
});
