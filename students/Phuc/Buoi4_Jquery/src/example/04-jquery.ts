import * as $ from 'jquery';
import {Person} from '../models/person';

$(document).ready(function(){
    $('#lbl1').css('color','red');
    $('#inp5').change(()=>{
        let val1 = $('#inp5').val().toString();
        $('#lbl1').text(val1);
    })
})