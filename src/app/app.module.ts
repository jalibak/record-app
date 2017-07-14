import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { RecordService } from './services/record.service';
import { RecordComponent } from './components/record.component';
import { RecordListComponent } from './components/record-list.component';
import { AddRecordComponent } from './components/add-record.component';
import { EditRecordComponent } from './components/edit-record.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RecordListComponent,
    AddRecordComponent,
    EditRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ RecordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
