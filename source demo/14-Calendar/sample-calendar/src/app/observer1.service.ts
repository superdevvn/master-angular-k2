import { Injectable } from '@angular/core';
import { ObserverService } from './observer.service';

@Injectable({
  providedIn: 'root'
})
export class Observer1Service {

  constructor(private observerService: ObserverService) { 
    this.observerService.thongBaoGetUserById.subscribe(user=>{
      user.a = 'A';
      user.b = 'B';
    });
  }
}
