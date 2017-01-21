import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GroupsTable} from "./groups-table.components";
import {StudentsTable} from "./students-tavle.component";
import {AppRoutingModule} from "./app-routing.module";
import {EditGroupComponent} from "./edit-group.component";
import {GroupService} from "./group.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GroupsTable,
    StudentsTable,
    EditGroupComponent
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
