import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit BillComponent } from './edit-bill.component';

describe('Edit BillComponent', () => {
  let component: Edit BillComponent;
  let fixture: ComponentFixture<Edit BillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Edit BillComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit BillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
