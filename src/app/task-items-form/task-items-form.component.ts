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
  listFilter: string = 'cart';
  removeTaskNumber: number = 1;

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

  addTask() {
    let elemItem = document.getElementById('orderedItemList');
    let newItem = document.createElement('li');

    newItem.textContent += this.listFilter;
    newItem.className = 'taskItem';

    elemItem?.appendChild(newItem);
  }

  removeTask() {
    let listElem = document.querySelectorAll('.taskItem');
    // let removeTaskNumber = document.getElementById('removeTaskNumber');

    // console.log('removeTask fires!!');
    console.log('STARTING... listElem.length', listElem);
    // console.log('removeTaskNumber', this.removeTaskNumber);

    // listElem.forEach(e =>(e.remove));

    for (let i = 0; i < listElem.length; i++) {
      // console.log(`listElem[${i}]`, listElem[i]);
      console.log(`index ${i}`);
      console.log(`this.removeTaskNumber ${this.removeTaskNumber}`);

      if (i === this.removeTaskNumber - 1) {
        listElem[i].remove;
      }
    }
  }
}
