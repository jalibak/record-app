import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { RecordService } from '../services/record.service';
import { Record } from '../models/record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  record: Record;

  constructor(private recordService: RecordService,
      private route: ActivatedRoute,
      private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.recordService.getRecord(params.get('catnum')))
      .subscribe(record => this.record = record);
  }

  goBack(): void {
    this.location.back();
  }
}
