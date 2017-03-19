import { TestBed, inject } from '@angular/core/testing';

import { PhoneDataService } from './phone-data.service';

describe('PhoneDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneDataService]
    });
  });

  it('should ...', inject([PhoneDataService], (service: PhoneDataService) => {
    expect(service).toBeTruthy();
  }));
});
