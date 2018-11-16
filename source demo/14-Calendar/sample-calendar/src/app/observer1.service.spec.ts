import { TestBed, inject } from '@angular/core/testing';

import { Observer1Service } from './observer1.service';

describe('Observer1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Observer1Service]
    });
  });

  it('should be created', inject([Observer1Service], (service: Observer1Service) => {
    expect(service).toBeTruthy();
  }));
});
