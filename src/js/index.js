$('.box p span').on('click', function() {
    $('.box p span').removeClass('dg');
    $(this).addClass('dg');
    var n = $(this).parent().index();
    $('.con').css('transform', 'translateX(' + n * -25 + '%)');
})