import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {StudentsTable} from "./students-tavle.component";
import {GroupsTable} from "./groups-table.components";

const routes: Routes = [
  {path: '', redirectTo: '/groups', pathMatch: 'full'},
  {path: 'groups', component: GroupsTable},
  {path: 'students', component: StudentsTable}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
