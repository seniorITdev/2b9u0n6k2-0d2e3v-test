import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private scrollToBottomSubject = new Subject<void>();

  scrollToBottom$ = this.scrollToBottomSubject.asObservable();

  triggerScrollToBottom(): void {
    this.scrollToBottomSubject.next();
  }
}