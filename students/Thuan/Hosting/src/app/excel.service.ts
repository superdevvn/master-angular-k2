import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  id='abcd';
  constructor() { }
  import(){
    $('body').append(`<input id="${this.id}" type="file">`)
    $(`#${this.id}`).trigger('click');
  }
  export(){}
}
