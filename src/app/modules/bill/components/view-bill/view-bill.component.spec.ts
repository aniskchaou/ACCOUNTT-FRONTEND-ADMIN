import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View BillComponent } from './view-bill.component';

describe('View BillComponent', () => {
  let component: View BillComponent;
  let fixture: ComponentFixture<View BillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [View BillComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View BillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
