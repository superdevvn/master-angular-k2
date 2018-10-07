import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  count = 0;
  user = {
    username: '',
    password: ''
  };
  constructor() { }

  increase() {
    this.count++;
    console.log('Count: ' + this.count);
  }

  getUser() {
    try {
      this.user = JSON.parse(localStorage.getItem('abcd'));
      if (!this.user) this.user = {
        username: '',
        password: ''
      };
    } catch{
      this.user = {
        username: '',
        password: ''
      };
    }
    return this.user;
  }

  setUser(username: string, password: string) {
    this.user = {
      username: username,
      password: password
    };
    localStorage.setItem('abcd', JSON.stringify(this.user));
  }

  
}
