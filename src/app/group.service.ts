import {Group} from "./group";
import {Injectable} from "@angular/core";
import {GROUPS} from "./mock-groups";

@Injectable()
export class GroupService {

  getGroups(): Promise<Group[]> {
    return Promise.resolve(GROUPS);
  }

  getGroup(id: number): Promise<Group> {
    return Promise.resolve(GROUPS.find((group) => {
      if (id === group.id)
        return true;
    }));
  }
}
