import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { TravelService } from '../../services/travel.service';
import { of } from 'rxjs';
import { PayoutResponse } from '../../interfaces/travel.interface';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let travelService: TravelService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
      providers: [TravelService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    travelService = TestBed.inject(TravelService);

    // Mock the observables
    spyOnProperty(travelService, 'payoutData$').and.returnValue(of({} as PayoutResponse));
    spyOnProperty(travelService, 'isLoading$').and.returnValue(of(false));

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
