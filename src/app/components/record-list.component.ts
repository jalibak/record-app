import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Record } from '../models/record';
import { RecordService } from '../services/record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  title = 'Record Application';
  records: Record[];
  selectedRecord: Record;

  constructor(private router: Router,
      private recordService: RecordService) { }

  getRecords(): void {
    this.recordService.getRecords().then(records => this.records = records);
  }

  onSelect(record: Record) {
    this.selectedRecord = record;
  }

  ngOnInit(): void {
    this.getRecords();
  }

  gotoRecord(id: string): void {
    this.router.navigate(['/record', id]);
  }

  editRecord(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  deleteRecord(id: string): void {
    this.records.splice(this.records.findIndex(record => record.id === id), 1);
    this.recordService.delete(id);
  }

  sortRecords(column: number): void {
    if (column === 0) {
      this.records.sort(function(a, b) {
        return a.id.localeCompare(b.id);
      })
    } else if (column === 1) {
      this.records.sort(function(a, b) {
        return a.artist.localeCompare(b.artist);
      })
    } else if (column === 2) {
      this.records.sort(function(a, b) {
        return a.title.localeCompare(b.title);
      })
    }
  }
}
