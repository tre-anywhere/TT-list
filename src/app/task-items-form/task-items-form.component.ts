import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task';
import { TodoServiceService } from '../data/todo-service.service';
import { NgForm, NgModel } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-items-form',
  templateUrl: './task-items-form.component.html',
  styleUrls: ['./task-items-form.component.css'],
})
export class TaskItemsFormComponent implements OnInit {
  origianlTaskInput: ITask = {
    name: 'def-task-name',
    details: 'def-task-details',
    priority: 'def-LOW',
    completed: true,
    id: 0,
    userId: 0,
    title: 'def-title',
  };

  removeTaskNumber: number = 1;
  // todos = ['one', 'two', 'three'];
  todos: [ITask] | undefined;

  taskInput: ITask = { ...this.origianlTaskInput };

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {
    this.todoService
      .getAllTodos()
      // .pipe( // pipe is not working
      //   map((data) => {
      //     return new this.taskInput data['id'], data['title'], data['body'];
      //   })
      // )
      .subscribe(
        (result) => {
          console.log('result: ', result);
          this.todos = result;

          console.log('this.todos: ', this.todos);
        },

        (error) => console.log('error: ', error)
      );

    // this.todoService.getAllTodos(this.taskInput).subscribe(
    //   (result) => {
    //     for (let i = 0; i < result.length; i++) {
    //       this.todos[i] = result[i].title;
    //     }
    //     return this.todos;
    //   },

    //   (error) => console.log('error: ', error)
    // );

    // console.log('ngOnInit: ');
  }

  addTask(form: NgForm) {
    // console.log('in onSubmit: ', form.valid);

    // this.todoService.postTasksForm(this.taskInput).subscribe(
    //   (result) => console.log('success: ', result),
    //   (error) => console.log('error: ', error)
    // );

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
  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  callTasks(formValues: any): void {
    let newTask: ITask = <ITask>formValues;
    newTask.id = 0;
    console.log('a new task is born >' + newTask);

    // this.todoService.getAllTodos(this.taskInput).subscribe(
    //   (data: string) => console.log('data', data),
    //   (err: any) => console.log(err),
    //   () => console.log('all done')
    // );
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
