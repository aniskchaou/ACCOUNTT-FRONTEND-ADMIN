import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNavigationComponent } from './bill-navigation.component';

describe('BillNavigationComponent', () => {
  let component: BillNavigationComponent;
  let fixture: ComponentFixture<BillNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
