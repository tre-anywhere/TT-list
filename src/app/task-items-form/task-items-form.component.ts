import { Component } from '@angular/core';
import { ITask } from '../models/task';
import { TodoServiceService } from '../data/todo-service.service';

@Component({
  selector: 'app-task-items-form',
  templateUrl: './task-items-form.component.html',
  styleUrls: ['./task-items-form.component.css'],
})
export class TaskItemsFormComponent {
  taskInput: ITask = {
    name: 'def-task-name',
    details: 'def-task-details',
    priority: 'def-LOW',
    completed: true,
    taskId: 0,
    userId: 0,
  };

  removeTaskNumber: number = 1;

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {}

  callTasks(formValues: any): void {
    let newTask: ITask = <ITask>formValues;
    newTask.taskId = 0;
    console.log('a new task is born >' + newTask);

    this.todoService.getAllTodos().subscribe(
      (data: string) => console.log('data', data),
      (err: any) => console.log(err),
      () => console.log('all done')
    );
  }

  addTask() {
    let tskName: string = 'NAME YOUR TASK!';
    let tskDetails: string = 'GIVE IT DETAILS...';
    let tskPriority: string = '';

    tskName = this.taskInput.name;
    tskDetails = this.taskInput.details;
    tskPriority = this.taskInput.priority;

    let elemItem = document.getElementById('orderedItemList');
    let newItem = document.createElement('li');

    newItem.textContent += `${tskName} + , Details: ${tskDetails}`;
    newItem.className = 'taskItem'; // used to remove task that are added by user

    elemItem?.appendChild(newItem);
    tskName = '';
    tskDetails = '';
  }

  removeTask() {
    let listElem = document.querySelectorAll('.taskItem');

    console.log('STARTING... listElem.length', listElem);

    if (this.removeTaskNumber <= listElem.length) {
      for (let i = 0; i < listElem.length; i++) {
        console.log(`index = ${i}`);
        console.log(`this.removeTaskNumber = ${this.removeTaskNumber}`);

        if (i === this.removeTaskNumber - 1) {
          console.log(`inside IF`);

          listElem.item(i).remove();
        }
      }
    } else {
      console.log(`Element not in the list`);
    }
  }
}
