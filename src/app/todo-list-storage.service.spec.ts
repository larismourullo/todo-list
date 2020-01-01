import { TestBed, inject } from '@angular/core/testing';
import { ToDoListStorageService } from './todo-list-storage.service';

describe('ToDoListStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoListStorageService]
    });
  });

  it('should be created', inject(
    [ToDoListStorageService],
    (service: ToDoListStorageService) => {
      expect(service).toBeTruthy();
    }
  ));
});
