import * as $ from 'jquery';
$(document).ready(function(){
    $('#lab1').css('color', 'red');
    $('#inp5').keyup(() => {
        let val1 = $('#inp5').val().toString();
        $('#lab1').text(val1);
    });
});
