import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { ListComponent } from './list.component';
import { TravelService } from 'src/app/services/travel.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListComponent ],
      providers: [
        TravelService,
        {provide: 'EnvironmentConfig', useValue: {
          name: 'Hello',
          amount: 123,
          status: 'ACTIVE',
        }}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the color of the check icon when it is clicked', () => {
    let checkIcon = fixture.debugElement.query(By.css('[icon]="faIconCheck"'));
    checkIcon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(checkIcon.classes['fa-marked']).toBeTruthy();
  });

  it('should change the color of the edit icon when it is clicked', () => {
    let editIcon = fixture.debugElement.query(By.css('[icon]="faIconEdit"'));
    editIcon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(editIcon.classes['fa-marked']).toBeTruthy();
  });

  it('should change the color of the trash icon when it is clicked', () => {
    let trashIcon = fixture.debugElement.query(By.css('[icon]="faIconTrash"'));
    trashIcon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(trashIcon.classes['fa-marked']).toBeTruthy();
  });
});
