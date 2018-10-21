import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  count = 0;
  user= {
    username: '',
    password: '',
  }
  constructor() { }
  increase(){
    this.count++;
  }
}
