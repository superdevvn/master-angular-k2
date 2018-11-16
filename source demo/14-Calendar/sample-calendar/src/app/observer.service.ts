import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  thongBaoGetUserById = new EventEmitter<any>();

  userObj = {
    'id1': {
      id: 'id1',
      username: 'Peter',
      password: '123456'
    },
    'id2': {
      id: 'id2',
      username: 'Super',
      password: '123456'
    }
  };
  constructor() { }

  getUserById(id: string){
    let user = this.userObj[id]; // 3 trường
    // thông báo
    this.thongBaoGetUserById.emit(user);
    return user;
  }
}
