import { TestBed } from '@angular/core/testing';

import { RegisterFpsCoachesService } from './register-fps-coaches.service';

describe('RegisterFpsCoachesService', () => {
  let service: RegisterFpsCoachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFpsCoachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
