import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIncomeComponent } from './category-income.component';

describe('CategoryIncomeComponent', () => {
  let component: CategoryIncomeComponent;
  let fixture: ComponentFixture<CategoryIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
