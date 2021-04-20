import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceNavigationComponent } from './invoice-navigation.component';

describe('InvoiceNavigationComponent', () => {
  let component: InvoiceNavigationComponent;
  let fixture: ComponentFixture<InvoiceNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
