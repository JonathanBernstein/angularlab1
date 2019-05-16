import { Component } from '@angular/core';
import {Todo} from "../Todo";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  strikethrough = {
    "text-decoration": "line-through",
  };
todoLis: Todo[] = [ 
  { 
    task: "laundry",
    completed: false
  },
  {
    task: "pay bills",
    completed: true
  }
];
  constructor() {  }

}
