import * as $ from 'jquery';
import { Person } from '../models/person';
$(document).ready(function () {
    $('#btn1').click(function (handler) {
        // handler.offsetX;
        // handler.pageX;
        // handler.screenX;
        // handler.clientX;
        let person = new Person();
        person.firstName = $('#inp1').val().toString();
        person.lastName = $('#inp2').val().toString();
        person.hello();
    });
});