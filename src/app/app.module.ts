import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { ToDoListService } from './todo-list.service';
import { ToDoListStorageService } from './todo-list-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [BrowserModule],
  providers: [ToDoListService, ToDoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
