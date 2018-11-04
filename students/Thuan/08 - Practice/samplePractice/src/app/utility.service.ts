import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  user = {
    username: '',
    password: ''
  }
  access_token:string;
  constructor() { }
  getUser() {
    try {
      this.user = JSON.parse(localStorage.getItem(this.access_token));
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
    localStorage.setItem(this.access_token, JSON.stringify(this.user));
  }
}
