import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="item">
      <input class="item__checkbox" type="checkbox" (click)="completeItem()" />
      <p
        class="item__title"
        [ngClass]="{ 'item__title--complete': isComplete }"
      >
        {{ todoItem.title }}
      </p>
      <button class="item__btn item__btn--red" (click)="removeItem()">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  isComplete: boolean = false;

  constructor() {}

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
