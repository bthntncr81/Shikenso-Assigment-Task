import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ToDo {
  id?: number;
  title: string;
  description?: string;
  completed: boolean;
  due_date?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://127.0.0.1:8000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  createTodo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.apiUrl, todo);
  }

  updateTodo(todo: ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
