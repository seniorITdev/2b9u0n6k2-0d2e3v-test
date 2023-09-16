<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import {
  Component,
  AfterViewChecked,
  ElementRef,
  ViewChild,
} from '@angular/core';
>>>>>>> Stashed changes
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
export class ListComponent {
  expenseList: Observable<Expense[]> = this.travelService.expenseList$;

  readonly faIconEdit: IconDefinition = faEdit;
  readonly faIconTrash: IconDefinition = faTrash;
  readonly faIconCheck: IconDefinition = faCheck;
<<<<<<< Updated upstream
  
  constructor(
    private router: Router,
    private travelService: TravelService,
  ) {}
=======

  constructor(private router: Router, private travelService: TravelService) {}

  ngAfterViewChecked(): void {
    const tableDOMElement = this.tableElement?.nativeElement;
    tableDOMElement.scrollTop = tableDOMElement.scrollHeight;
  }
>>>>>>> Stashed changes

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
