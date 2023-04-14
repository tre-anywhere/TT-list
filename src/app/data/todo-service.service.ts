import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  postTasksForm(taskInput: ITask): Observable<any> {
    return of(taskInput);
  }

  getAllTodos(taskInput: ITask): Observable<any> {
    // return this.http.get<string>('https://jsonplaceholder.typicode.com/todos');
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
