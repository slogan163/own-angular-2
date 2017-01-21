import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {StudentsTable} from "./students-tavle.component";
import {GroupsTable} from "./groups-table.components";
import {EditGroupComponent} from "./edit-group.component";

const routes: Routes = [
  {path: '', redirectTo: '/groups', pathMatch: 'full'},
  {path: 'groups', component: GroupsTable},
  {path: 'students', component: StudentsTable},
  {path: 'group/:id', component: EditGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
