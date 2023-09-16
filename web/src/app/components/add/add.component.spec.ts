import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add.component';
import { TravelService } from 'src/app/services/travel.service';
import { of } from 'rxjs';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let travelService: TravelService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [ReactiveFormsModule],
      providers: [TravelService],
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    travelService = TestBed.inject(TravelService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    expect(component.form.get('name')?.value).toBe('');
    expect(component.form.get('price')?.value).toBe(0);
  });

  it('should call travelService.addExpense() when save() is called in ADD mode', () => {
    component.status = 'ADD';
    const addExpenseSpy = spyOn(travelService, 'addExpense');
    
    component.save();

    expect(addExpenseSpy).toHaveBeenCalled();
  });

  it('should call travelService.editExpense() when save() is called in EDIT mode', () => {
    component.status = 'EDIT';
    const editExpenseSpy = spyOn(travelService, 'editExpense');
    
    component.save();

    expect(editExpenseSpy).toHaveBeenCalled();
  });

  it('should reset the form after save()', () => {
    const resetFormSpy = spyOn(component.form, 'reset');
    
    component.save();

    expect(resetFormSpy).toHaveBeenCalled();
  });

  it('should call travelService.setAddStatus() after save()', () => {
    const setAddStatusSpy = spyOn(travelService, 'setAddStatus');
    
    component.save();

    expect(setAddStatusSpy).toHaveBeenCalled();
  });

  it('should mark all form controls as touched after save()', () => {
    const markAllAsTouchedSpy = spyOn(component.form, 'markAllAsTouched');
    
    component.save();

    expect(markAllAsTouchedSpy).toHaveBeenCalled();
  });

  it('should call travelService.removeExpense() when delete() is called', () => {
    const removeExpenseSpy = spyOn(travelService, 'removeExpense');
    
    component.delete();

    expect(removeExpenseSpy).toHaveBeenCalled();
  });

  it('should call travelService.setAddStatus() when delete() is called', () => {
    const setAddStatusSpy = spyOn(travelService, 'setAddStatus');
    
    component.delete();

    expect(setAddStatusSpy).toHaveBeenCalled();
  });

  it('should call travelService.setAddStatus() when cancel() is called', () => {
    const setAddStatusSpy = spyOn(travelService, 'setAddStatus');
    
    component.cancel();

    expect(setAddStatusSpy).toHaveBeenCalled();
  });
});
