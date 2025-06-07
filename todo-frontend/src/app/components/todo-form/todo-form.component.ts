import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { ToDo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: false,
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent implements OnInit {
  todoForm: any;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,

    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      due_date: [''],
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const newTodo: ToDo = {
        ...this.todoForm.value,
        completed: false,
      };
      this.todoService.createTodo(newTodo).subscribe({
        next: () => {
          this.todoForm.reset();
          this.toast.show('success', 'To-Do added successfully!');
          this.router.navigate(['/']);
        },
        error: () => {
          this.toast.show('error', 'Failed to add to-do!');
        },
      });
    }
  }
}
