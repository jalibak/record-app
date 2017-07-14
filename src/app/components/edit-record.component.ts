import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { RecordService } from '../services/record.service';

import { Record } from '../models/record';
import { Track } from '../models/track';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  record: Record;
  newTrack = new Track();
  updated = false;

  constructor(private recordService: RecordService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.recordService.getRecord(params.get('id')))
      .subscribe(record => this.record = record);
  }

  update() {
    this.recordService.update(this.record);
    this.updated = true;
  }

  goBack(): void {
    this.location.back();
  }

  addTrack() {
    this.record.trackList.push(this.newTrack);
    this.newTrack = new Track();
  }

}
