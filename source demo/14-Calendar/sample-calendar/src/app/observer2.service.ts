import { Injectable } from '@angular/core';
import { ObserverService } from './observer.service';

@Injectable({
  providedIn: 'root'
})
export class Observer2Service {

  constructor(private observerService: ObserverService) { 
    this.observerService.thongBaoGetUserById.subscribe(user=>{
      user.c = 'C';
      user.d = 'D';
    });
  }
}
