import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {
  @Input() label: string = 'Label X';
  @Input() type: string = 'text';
  @Input() required: boolean = false;

  @Output() onKeyup = new EventEmitter<string>();

  _model: string;

  @Input() set model(value: string) {
    this._model = value;
  };
  @Output() modelChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  keyup() {
    this.onKeyup.emit(this._model);
    // this.modelChange.emit(this._model);
  }

  ngModelChange(value: string){
    this._model = value;
    this.modelChange.emit(this._model);
  }
}