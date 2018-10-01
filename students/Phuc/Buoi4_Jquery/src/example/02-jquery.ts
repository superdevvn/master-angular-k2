import * as $ from 'jquery';
import {Person} from '../models/person';

$(document).ready(function(){
    $('#btn1').click(function(){
        let person = new Person();
         person.firtName = $('inpu1').val().toString();
         person.lastName = $('inpu2').val().toString();
       person.hello();
    })
})
