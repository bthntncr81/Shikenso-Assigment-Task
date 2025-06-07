import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { ToDo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [];
  filter: 'all' | 'completed' | 'open' = 'all';
  search: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  showDetailsMap: { [id: number]: boolean } = {};

  constructor(private todoService: TodoService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
      },
      error: () => {
        this.toast.show('error', 'Failed to load to-dos!');
      },
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.toast.show('success', 'To-Do deleted successfully!');
        this.loadTodos();
      },
      error: () => {
        this.toast.show('error', 'Failed to delete to-do!');
      },
    });
  }

  toggleComplete(todo: ToDo) {
    event?.preventDefault();
    this.todoService.updateTodo(todo).subscribe({
      next: () => {
        this.toast.show('success', 'To-Do updated!');
        this.loadTodos();
      },
      error: () => {
        this.toast.show('error', 'Failed to update to-do!');
      },
    });
  }

  toggleSort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  toggleDetails(id: number) {
    this.showDetailsMap[id] = !this.showDetailsMap[id];
  }

  get filteredTodos() {
    const filtered = this.todos
      .filter((todo) =>
        this.filter === 'all'
          ? true
          : this.filter === 'completed'
          ? todo.completed
          : !todo.completed
      )
      .filter((todo) =>
        todo.title.toLowerCase().includes(this.search.toLowerCase())
      );

    return filtered.sort((a, b) => {
      const dateA = a.due_date ? new Date(a.due_date).getTime() : 0;
      const dateB = b.due_date ? new Date(b.due_date).getTime() : 0;
      return this.sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }
}
