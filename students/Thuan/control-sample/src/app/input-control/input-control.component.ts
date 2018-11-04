import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {
  @Input() label:string="Label X";
  @Input()  type:string='text';
  @Input()  required: boolean =false;
 
  _model:string;
  constructor() { }
  @Output() onKeyup = new EventEmitter<string>();
  @Input() set model(value:string){
    this._model=value;
  };
  @Output() modelChange = new EventEmitter<string>();
  ngOnInit() {
  }
  
  keyup(){
    if(this._model.length >=3)
    this.onKeyup.emit(this._model);
   // this.modelChange.emit(this._model);
  }
  ngModelChange(value:string){
    this._model=value;
    this.modelChange.emit(this._model);
  }

}
