import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="list">
      <h1>ToDoList <i class="fas fa-pencil-alt"></i></h1>
      <todo-input class="list__add" (submit)="addItem($event)"></todo-input>
      <ul>
        <li *ngFor="let item of todoList">
          <todo-item
            [todoItem]="item"
            (remove)="removeItem($event)"
          ></todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'ToDoList';
  todoList: any;

  constructor(private todoListService: ToDoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getToDoList();
  }

  addItem(title: string) {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
}
