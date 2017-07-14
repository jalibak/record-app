import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RecordService } from '../services/record.service';

import { Record } from '../models/record';
import { Track } from '../models/track';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  record: Record;

  constructor(private recordService: RecordService,
    private router: Router) { }

  ngOnInit() {
    this.record = new Record();
    this.record.trackList = new Array<Track>();
  }

  add(): void {
    console.log(this.record);

    this.recordService.create(this.record);

    this.router.navigate(['/records']);
  }
}
