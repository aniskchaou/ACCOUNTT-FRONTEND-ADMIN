import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBillComponent } from 'src/app/modules/supplier/components/add-bill/add-bill.component';


describe('Add BillComponent', () => {
  let component: AddBillComponent;
  let fixture: ComponentFixture<AddBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBillComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
