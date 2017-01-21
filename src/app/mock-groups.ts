import {Group} from "./group";
import {Student} from "./student";

export let STUDENTS: Student[] = [
  {id:1, firstName:'Ivan', lastName:'Ivanov'},
  {id:2, firstName:'Petr', lastName:'Ivanov'},
  {id:3, firstName:'Jeka', lastName:'Jekanov'},
  {id:2, firstName:'Dima', lastName:'Dimanov'}
];

export let GROUPS: Group[] = [
  {id:1, name:'gr-1', students:[STUDENTS[0], STUDENTS[1]] },
  {id:2, name:'gr-2', students:[STUDENTS[2], STUDENTS[3]] }
];
