import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Record } from '../models/record';
import { Genre } from '../models/genre';

@Injectable()
export class RecordService {

  private recordsUrl = 'api/records';
  private genreUrl = 'api/genres';
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }

  getRecords(): Promise<Record[]> {
    return this.http.get(this.recordsUrl)
        .toPromise()
        .then(response => response.json() as Record[])
        .catch(this.handleError);
  }

  getRecord(catnum: string): Promise<Record> {
    const url = `${this.recordsUrl}/${catnum}`;
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
    const url = `${this.recordsUrl}/${record.catnum}`;
    return this.http
      .put(url, record, {headers: this.headers})
      .toPromise()
      .then(() => record)
      .catch(this.handleError);
  }

  delete(catnum: string): Promise<void> {
    const url = `${this.recordsUrl}/${catnum}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  getGenres(): Promise<Genre[]> {
    return this.http.get(this.genreUrl)
      .toPromise()
      .then(response => response.json() as Genre[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error();
    return Promise.reject(error.message || error);
  }

}
