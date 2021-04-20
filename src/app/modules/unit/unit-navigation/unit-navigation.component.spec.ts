import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitNavigationComponent } from './unit-navigation.component';

describe('UnitNavigationComponent', () => {
  let component: UnitNavigationComponent;
  let fixture: ComponentFixture<UnitNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
