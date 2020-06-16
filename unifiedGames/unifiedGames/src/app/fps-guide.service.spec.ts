import { TestBed } from '@angular/core/testing';

import { FpsGuideService } from './fps-guide.service';

describe('FpsGuideService', () => {
  let service: FpsGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpsGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
