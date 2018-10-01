import * as $ from 'jquery';
$(document).ready(function(){
    $('#inp3').keyup(() => {
        let val1 = $('#inp3').val();
        $('#inp4').val(val1);
    });
});
