import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityserviceS {

  count = 0;
  user = {
    username: '',
    password: ''
  }
  increase() {
    this.count++;
    console.log('Count: ' + this.count);
  }
}
