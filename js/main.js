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
