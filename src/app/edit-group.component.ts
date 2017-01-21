///<reference path="../../node_modules/rxjs/add/operator/switchMap.d.ts"/>
import {Component, group} from "@angular/core";
import {Group} from "./group";
import {GroupService} from "./group.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'edit-group',
  template: `
<div>
  <label>ID Group</label>  {{group.id}}  
  <input [(ngModel)] = "group.id" placeholder="group id"/>
  <br>
  <label>Group Name</label> {{group.name}}
  <input [(ngModel)] = "group.name" placeholder="name"/>
</div>
`
})

export class EditGroupComponent {
  group: Group;

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.group = new Group();

    this.route.params.subscribe(params => {
      this.groupService.getGroup(+params['id']).then(group => {
        this.group = group;
      })
    });
  }
}
