import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { faEdit, faTrash, faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Expense } from '../../interfaces/travel.interface';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  expenseList: Observable<Expense[]> = this.travelService.expenseList$;

  readonly faIconEdit: IconDefinition = faEdit;
  readonly faIconTrash: IconDefinition = faTrash;
  readonly faIconCheck: IconDefinition = faCheck;
  
  private previousListLength = 0;

  @ViewChild('expense_table', { static: false })
  table!: ElementRef;
  
  constructor(
    private router: Router,
    private travelService: TravelService,
    private renderer: Renderer2
  ) {}

  ngAfterViewChecked(): void {
    this.expenseList.subscribe(list => {
      if (list.length !== this.previousListLength) {
        this.previousListLength = list.length;
        this.renderer.setProperty(this.table.nativeElement, 'scrollTop', this.table.nativeElement.scrollHeight);
      }
    });
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
