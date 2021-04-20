import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxNavigationComponent } from './tax-navigation.component';

describe('TaxNavigationComponent', () => {
  let component: TaxNavigationComponent;
  let fixture: ComponentFixture<TaxNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
