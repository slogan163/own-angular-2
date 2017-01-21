import {Component, group} from "@angular/core";
import {Student} from "./student";
import {GROUPS} from "./mock-groups";
import {forEach} from "@angular/router/src/utils/collection";
import {Group} from "./group";
@Component({
  selector: 'students-table',
  template: `
  <table border="1">
    <caption>Students Table</caption>
    <tr>
      <td>Student ID</td>
      <td>Student First Name</td>
      <td>Student Last Name</td>
    </tr>
    <tr *ngFor="let student of students">
      <td>{{student.id}}</td>
      <td>{{student.firstName}}</td>
       <td>{{student.lastName}}</td>
    </tr>
  </table>
`
})

export class StudentsTable {
  students: Student[] = this.getStudents();

  studentList: Student[] = this.getStudents();

  private getStudents():Student[] {
    var list: Student[] = [];

    GROUPS.forEach((group) => {
      list = list.concat(group.students)
    });

    return list;
  }
}
