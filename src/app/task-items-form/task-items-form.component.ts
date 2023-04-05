import { Component } from '@angular/core';
import { Task } from '../models/task';
import { TodoServiceService } from '../data/todo-service.service';

@Component({
  selector: 'app-task-items-form',
  templateUrl: './task-items-form.component.html',
  styleUrls: ['./task-items-form.component.css'],
})
export class TaskItemsFormComponent {
  values = new Task();

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {}

  callTasks(formValues: any): void {
    let newTask: Task = <Task>formValues;
    newTask.id = 0;
    console.log('a new task is born >' + newTask);

    this.todoService.getAllTodos().subscribe(
      (data: string) => console.log('data', data),
      (err: any) => console.log(err),
      () => console.log('all done')
    );
  }

  onKey(event: any) {
    let elemItem = document.getElementById('orderedItemList');
    let newItem = document.createElement('li');

    // without type info
    newItem.textContent += event.target.value;
    newItem.className = '';

    elemItem?.appendChild(newItem);
  }
}
