import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <i class="fas fa-plus"></i>
  <input class="todo-input" [value]="title" (keyup.enter)="changeTitle($event.target.value)" placeholder="O que precisa ser feito?" #inputElement>
  `,  
  styleUrls: ['./input.component.css']  
})    
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string = '';
  
  constructor() { }                     

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}