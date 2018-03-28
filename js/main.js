//Initiates Tabslet Plugin
$(document).ready(function () {
    $('.tabs').tabslet();
});

//Initiates Skills Bar Plugin
$(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 3000);
    });
});

//Custom code to append a div to the footer with contact info when the contact button is pressed
$(document).ready(function () {
    $('button').one('click', function () {
        $('footer').append('<div><p>Email: christiant.powell@gmail.com</p><p>Phone: 555.555.5555</p></div>');
    });
});

//Custom code that gives a hover opacity effect to the interest section images
$(document).ready(function () {
    $('.interestimg').hover(function () {
        $(this).css('opacity', '.5');
    }, function () {
        $(this).css('opacity', '1');
    });
});
