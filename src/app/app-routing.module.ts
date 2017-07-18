import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordComponent } from './components/record.component';
import { RecordListComponent} from './components/record-list.component';
import { AddRecordComponent } from './components/add-record.component';
import { EditRecordComponent } from './components/edit-record.component';
import { PlaylistsComponent } from './components/playlists.component';

const routes: Routes = [
  { path: '', redirectTo: '/records', pathMatch: 'full' },
  { path: 'records', component: RecordListComponent },
  { path: 'record/:id', component: RecordComponent },
  { path: 'add', component: AddRecordComponent },
  { path: 'edit/:id', component: EditRecordComponent },
  { path: 'playlists', component: PlaylistsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
