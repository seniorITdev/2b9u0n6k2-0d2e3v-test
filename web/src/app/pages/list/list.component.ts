import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
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
  
  @ViewChild('expense_table') private tableRef: ElementRef | null = null;

  constructor(
    private router: Router,
    private travelService: TravelService,
  ) {}

  ngOnInit() {
    // Other initialization code
  
    // Scroll the tableRef to the bottom after data is loaded
    this.expenseList.subscribe(() => {
      this.scrollToBottom();
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
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

  scrollToBottom() {
    if(this.tableRef)
    {
      try {
        this.tableRef.nativeElement.scrollTop = this.tableRef.nativeElement.scrollHeight;
      } catch(err) {console.error(err)}
    } else return;
  }
}
