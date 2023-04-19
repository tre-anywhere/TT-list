import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  postTasksForm(taskInput: ITask): Observable<any> {
    return of(taskInput);
  }

  getAllTodos(): Observable<any> {
    return this.http.get<ITask>('https://jsonplaceholder.typicode.com/todos');
  }
}
