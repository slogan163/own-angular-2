import {Component} from "@angular/core";
import {Group} from "./group";
import {GROUPS} from "./mock-groups";

@Component({
  selector: 'groups-table',
  template: `
  <table border="1">
    <caption>Group Table</caption>
    <tr>
      <td>Group ID</td>
      <td>Group Name</td>
    </tr>
    <tr *ngFor="let group of groups">
      <td>{{group.id}}</td>
      <td>{{group.name}}</td>
    </tr>
  </table>
`
})

export class GroupsTable {
  groups: Group[] = GROUPS;
}




