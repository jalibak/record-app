import { TestBed, inject } from '@angular/core/testing';

import { MockRecordService } from './mock-record.service';

describe('RecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockRecordService]
    });
  });

  it('should be created', inject([MockRecordService], (service: MockRecordService) => {
    expect(service).toBeTruthy();
  }));
});
