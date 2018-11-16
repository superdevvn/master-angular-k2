import { TestBed, inject } from '@angular/core/testing';

import { Observer2Service } from './observer2.service';

describe('Observer2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Observer2Service]
    });
  });

  it('should be created', inject([Observer2Service], (service: Observer2Service) => {
    expect(service).toBeTruthy();
  }));
});
