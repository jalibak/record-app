import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Record } from '../models/record';

@Injectable()
export class RecordService {

  private recordsUrl = 'api/records';
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }

  getRecords(): Promise<Record[]> {
    return this.http.get(this.recordsUrl)
        .toPromise()
        .then(response => response.json() as Record[])
        .catch(this.handleError);
  }

  getRecord(id: string): Promise<Record> {
    const url = `${this.recordsUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Record)
        .catch(this.handleError);
  }

  create(record: Record): Promise<Record> {
    return this.http.post(this.recordsUrl, record, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Record)
        .catch(this.handleError);
  }

  update(record: Record): Promise<Record> {
    const url = `${this.recordsUrl}/${record.id}`;
    return this.http
      .put(url, record, {headers: this.headers})
      .toPromise()
      .then(() => record)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.recordsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error();
    return Promise.reject(error.message || error);
  }

}
