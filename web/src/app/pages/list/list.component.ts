import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { faEdit, faTrash, faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Expense } from '../../interfaces/travel.interface';
import { TravelService } from '../../services/travel.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  expenseList: Observable<Expense[]> = this.travelService.expenseList$;
  private subscription: Subscription | undefined;

  readonly faIconEdit: IconDefinition = faEdit;
  readonly faIconTrash: IconDefinition = faTrash;
  readonly faIconCheck: IconDefinition = faCheck;
  @ViewChild('expenseTable')
  expenseTable!: ElementRef;

  constructor(
    private router: Router,
    private travelService: TravelService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.subscription = this.scrollService.scrollToBottom$.subscribe(() => this.scrollToBottom())
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }

  scrollToBottom(): void {
    setTimeout(() => {
      this.expenseTable.nativeElement.scrollTop = this.expenseTable.nativeElement.scrollHeight;
    }, 0)
  }

  remove(index: number): void {
    this.travelService.setRemoveData(index);
  }

  settleUp(): void {
    this.travelService.getPayouts();
    this.router.navigate(['result']);
  }

  edit(index: number): void {
    this.travelService.setEditData(index);
  }

  mark(index: number): void {
    this.travelService.markExpense(index);
  }
}
