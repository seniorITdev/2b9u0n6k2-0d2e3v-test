import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TravelService } from './travel.service';
import { EnvironmentConfig, ENV_CONFIG } from '../interfaces/environment-config.interface';
import { ExpenseStatus } from '../enums/ExpenseStatus';
import { UpdateStatus } from '../enums/UpdateStatus';
import { PayoutResponse } from '../interfaces/travel.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('TravelService', () => {
  let service: TravelService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const environmentConfig: EnvironmentConfig = {
      environment: {
        apiURL: 'http://example.com/api', // Replace with your API URL
      },
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TravelService,
        { provide: ENV_CONFIG, useValue: environmentConfig },
      ],
    });

    service = TestBed.inject(TravelService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an expense', () => {
    const newExpense = {
      name: 'Test Expense',
      amount: 100,
      status: ExpenseStatus.ACTIVE,
    };

    service.addExpense(newExpense);

    service.expenseList$.subscribe((expenses) => {
      expect(expenses.length).toBe(1);
      expect(expenses[0]).toEqual(newExpense);
    });
  });

  it('should edit an expense', () => {
    const initialExpense = {
      name: 'Initial Expense',
      amount: 200,
      status: ExpenseStatus.ACTIVE,
    };
    const updatedExpense = {
      name: 'Updated Expense',
      amount: 300,
      status: ExpenseStatus.ACTIVE,
    };

    // Add an initial expense
    service.addExpense(initialExpense);

    // Set the edit mode and edit the expense
    service.setEditData(0);
    service.editExpense(updatedExpense);

    service.expenseList$.subscribe((expenses) => {
      expect(expenses.length).toBe(1);
      expect(expenses[0]).toEqual(updatedExpense);
    });
  });

  it('should remove an expense', () => {
    const expenseToRemove = {
      name: 'Expense to Remove',
      amount: 150,
      status: ExpenseStatus.ACTIVE,
    };

    // Add an expense
    service.addExpense(expenseToRemove);

    // Remove the expense
    service.setRemoveData(0);

    service.expenseList$.subscribe((expenses) => {
      expect(expenses.length).toBe(0);
    });
  });

  it('should set the form status to ADD', () => {
    service.setEditData(0);
    service.setAddStatus();

    service.formStatus$.subscribe((status) => {
      expect(status).toBe(UpdateStatus.ADD);
    });
  });

  // Add more test cases for other methods as needed

  afterEach(() => {
    httpTestingController.verify();
  });
});
