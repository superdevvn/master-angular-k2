import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  user = {
    username: '',
    password: ''
  };
  constructor() { }

  getUser() {
    try {
      this.user = JSON.parse(localStorage.getItem('abcd'));
      // tslint:disable-next-line:curly
      if (!this.user) this.user = {
        username: '',
        password: ''
      };
    } catch {
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

  removeUser() {
    this.user = {
      username: '',
      password: ''
    };
    localStorage.setItem('abcd', JSON.stringify(this.user));
  }
}
