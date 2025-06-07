import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _message$ = new BehaviorSubject<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  message$ = this._message$.asObservable();

  show(type: 'success' | 'error', text: string) {
    this._message$.next({ type, text });
    setTimeout(() => this._message$.next(null), 3000);
  }
}
