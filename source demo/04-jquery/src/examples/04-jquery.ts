import * as $ from 'jquery';
$(document).ready(function () {
    $('#lbl1').css('color', 'red');
    $('#inp5').keyup(() => {
        let val1 = $('#inp5').val().toString();
        $('#lbl1').text(val1);
    });
});