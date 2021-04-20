import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueNavigationComponent } from './revenue-navigation.component';

describe('RevenueNavigationComponent', () => {
  let component: RevenueNavigationComponent;
  let fixture: ComponentFixture<RevenueNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
