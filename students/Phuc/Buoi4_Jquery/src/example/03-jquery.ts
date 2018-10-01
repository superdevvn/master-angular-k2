import * as $ from 'jquery';
import {Person} from '../models/person';
$(document).ready(function(){
    $('#inp3').change(()=>{
        let val1 = $('#inp3').val();
        $('#inp4').val(val1);
    })
})