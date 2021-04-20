import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierNavigationComponent } from './supplier-navigation.component';

describe('SupplierNavigationComponent', () => {
  let component: SupplierNavigationComponent;
  let fixture: ComponentFixture<SupplierNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
