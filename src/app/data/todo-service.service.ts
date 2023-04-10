import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<string> {
    return this.http.get<string>('https://jsonplaceholder.typicode.com/todos');
  }
}
