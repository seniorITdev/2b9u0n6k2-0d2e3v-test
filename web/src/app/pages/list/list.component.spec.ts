import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for form testing
import { AddComponent } from '../../../app/components/add/add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [ReactiveFormsModule], // Import ReactiveFormsModule for form testing
    }).compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill input values and trigger save', () => {
    const nameInput = fixture.nativeElement.querySelector('[data-testid="name-input"]');
    const priceInput = fixture.nativeElement.querySelector('[data-testid="amount-input"]');
    const addButton = fixture.nativeElement.querySelector('[data-testid="add-expense-button"]');

    expect(nameInput).toBeTruthy();
    expect(priceInput).toBeTruthy();
    expect(addButton).toBeTruthy();

    // Fill input values
    nameInput.value = 'Test Name';
    priceInput.value = '10.99';

    // Trigger input events to update form controls
    nameInput.dispatchEvent(new Event('input'));
    priceInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Trigger click event on the add button
    addButton.click();
    fixture.detectChanges();

    // You can add more expectations here based on the expected behavior after saving.
  });
});
