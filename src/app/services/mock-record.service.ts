import { Injectable } from '@angular/core';

import { Record } from '../models/record';
import { RECORDS } from '../models/mock-records';

@Injectable()
export class MockRecordService {

  constructor() { }

  getRecords(): Promise<Record[]> {
    return Promise.resolve(RECORDS);
  }

  getRecord(catnum: string): Promise<Record> {
    return this.getRecords()
      .then(records => records.find(record => record.catnum === catnum));
  }
}
