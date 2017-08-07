import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Record } from '../models/record';
import { Genre } from '../models/genre';
import { RecordService } from '../services/record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  title = 'Record Application';
  records: Record[];
  genres: Genre[];
  selectedRecord: Record;

  constructor(private router: Router,
      private recordService: RecordService) { }

  getRecords(): void {
    this.recordService.getRecords().then(records => this.records = records)
  }

  getGenres(): void {
    this.recordService.getGenres().then(genres => this.genres = genres)
  }

  onSelect(record: Record) {
    this.selectedRecord = record;
  }

  ngOnInit(): void {
    this.getRecords();
    this.getGenres();
  }

  gotoRecord(catnum: string): void {
    this.router.navigate(['/record', catnum]);
  }

  editRecord(catnum: string): void {
    this.router.navigate(['/edit', catnum]);
  }

  deleteRecord(catnum: string): void {
    this.records.splice(this.records.findIndex(record => record.catnum === catnum), 1);
    this.recordService.delete(catnum);
  }

  sortRecords(column: number): void {
    if (column === 0) {
      this.records.sort(function(a, b) {
        return a.catnum.localeCompare(b.catnum);
      })
    } else if (column === 1) {
      this.records.sort(function(a, b) {
        return a.artist.localeCompare(b.artist);
      })
    } else if (column === 2) {
      this.records.sort(function(a, b) {
        return a.title.localeCompare(b.title);
      })
    } else if (column === 3) {
      this.records.sort(function(a, b) {
        return a.genre.localeCompare(b.genre);
      })
    }
  }

  filterRecords(genre: string): void {
    const filteredRecords = this.records.filter(function(record) {
      return record.genre === genre;
    });

    this.records = filteredRecords;
  }
}
