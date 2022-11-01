import { TestBed } from '@angular/core/testing';

import { ConsultationDetailsService } from './consultation-details.service';

describe('ConsultationDetailsService', () => {
  let service: ConsultationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
