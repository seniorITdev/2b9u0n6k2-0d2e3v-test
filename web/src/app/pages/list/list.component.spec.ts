import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit-button color green when click it after delete-button click', () => {
    const deleteButton = fixture.debugElement.query(By.css('fa-icon[icon="faIconTrash"]')).nativeElement;
    deleteButton.click();

    const editButton = fixture.debugElement.query(By.css('fa-icon[icon="faIconEdit"]')).nativeElement;
    editButton.click();

    fixture.detectChanges();

    expect(editButton.style.backgroundColor).toBe('green');
  });
});
