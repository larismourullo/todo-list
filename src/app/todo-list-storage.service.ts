import { Injectable } from '@angular/core';
const storageName = 'todo_list';
const defaultList = [
];

@Injectable()
export class TodoListStorageService {
  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  get() {
    return [...this.todoList]
  }

  post(item) {
    this.todoList.push(item);
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }

  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }

  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  destroy(item) {
    this.todoList.splice(this.todoList.indexOf(item), 1);
    return this.update();
  }
}
