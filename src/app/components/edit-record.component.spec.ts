import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordComponent } from './edit-record.component';

describe('EditRecordComponent', () => {
  let component: EditRecordComponent;
  let fixture: ComponentFixture<EditRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
