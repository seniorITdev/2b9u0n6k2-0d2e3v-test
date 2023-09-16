import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    // Mock the expenseList for testing
    component.expenseList = of([{
      name: 'Test1',
      amount: 10.0,
      status: 'NOT_DONE'
    }, {
      name: 'Test2',
      amount: 15.0,
      status: 'DONE'
    }]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display expenses', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2);
    
    const firstRowColumns = rows[0].queryAll(By.css('td'));
    expect(firstRowColumns[1].nativeElement.textContent).toContain('Test1');
    expect(firstRowColumns[2].nativeElement.textContent).toContain('10.0');

    const secondRowColumns = rows[1].queryAll(By.css('td'));
    expect(secondRowColumns[1].nativeElement.textContent).toContain('Test2');
    expect(secondRowColumns[2].nativeElement.textContent).toContain('15.0');
  });

  it('should trigger mark function', () => {
    spyOn(component, 'mark');
    const markButton = fixture.debugElement.query(By.css('[data-testid="edit-button-0"]'));
    markButton.triggerEventHandler('click', null);
    expect(component.mark).toHaveBeenCalledWith(0);
  });

  it('should trigger edit function', () => {
    spyOn(component, 'edit');
    const editButton = fixture.debugElement.query(By.css('[data-testid="edit-button-0"]'));
    editButton.triggerEventHandler('click', null);
    expect(component.edit).toHaveBeenCalledWith(0);
  });

  it('should trigger remove function', () => {
    spyOn(component, 'remove');
    const removeButton = fixture.debugElement.query(By.css('[data-testid="delete-button-0"]'));
    removeButton.triggerEventHandler('click', null);
    expect(component.remove).toHaveBeenCalledWith(0);
  });

  it('should trigger settleUp function', () => {
    spyOn(component, 'settleUp');
    const settleUpButton = fixture.debugElement.query(By.css('[data-testid="settle-up-button"]'));
    settleUpButton.triggerEventHandler('click', null);
    expect(component.settleUp).toHaveBeenCalled();
  });
});
