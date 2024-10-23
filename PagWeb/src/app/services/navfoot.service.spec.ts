import { TestBed } from '@angular/core/testing';

import { NavfootService } from './navfoot.service';

describe('NavfootService', () => {
  let service: NavfootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavfootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
