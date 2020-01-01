import { TestBed, inject } from '@angular/core/testing';
import { ToDoListService } from './todo-list.service';

describe('ToDoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoListService]
    });
  });

  it('should be created', inject(
    [ToDoListService],
    (service: ToDoListService) => {
      expect(service).toBeTruthy();
    }
  ));
});
