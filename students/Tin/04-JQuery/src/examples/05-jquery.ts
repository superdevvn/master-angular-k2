import * as $ from 'jquery';
$(document).ready(function () {

    $('#btn2').mousemove(function (e) {
        if ($(this).attr('title') != "") {
            $('#tooltipWindow div').html($(this).attr('title'));
            $('#tooltipWindow').css('left', e.clientX + 10).css('top', e.clientY);
            $('#tooltipWindow').show();
        };
    });

    $('#btn2').mouseleave(function (e) {
        $('#tooltipWindow').hide();
    });
});
