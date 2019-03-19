import { TestBed } from '@angular/core/testing';

import { JhkimserviceService } from './jhkimservice.service';

describe('JhkimserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JhkimserviceService = TestBed.get(JhkimserviceService);
    expect(service).toBeTruthy();
  });
});
