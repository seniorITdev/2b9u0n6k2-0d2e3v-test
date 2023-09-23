import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  faEdit,
  faTrash,
  faCheck,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Expense } from '../../interfaces/travel.interface';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewChecked {
  @ViewChild('scrollBody') tableBody: ElementRef | null = null;
  expenseList: Observable<Expense[]> = this.travelService.expenseList$;

  readonly faIconEdit: IconDefinition = faEdit;
  readonly faIconTrash: IconDefinition = faTrash;
  readonly faIconCheck: IconDefinition = faCheck;

  constructor(private router: Router, private travelService: TravelService) {}

  ngAfterViewChecked(): void {
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

  scrollToBottom(): void {
    if (this.tableBody) {
      this.tableBody.nativeElement.scrollTop =
        this.tableBody.nativeElement.scrollHeight;
    }
  }
}
