import { Injectable } from '@angular/core';
import { ToDoListStorageService } from './todo-list-storage.service';

@Injectable()
export class ToDoListService {
  constructor(private storage: ToDoListStorageService) { }

  getToDoList() {
    return this.storage.get();
  }

  addItem(item) {
    return this.storage.post(item);
  }

  removeItem(item) {
    return this.storage.destroy(item);
  }
}
