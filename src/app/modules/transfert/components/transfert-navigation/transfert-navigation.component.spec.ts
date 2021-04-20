import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertNavigationComponent } from './transfert-navigation.component';

describe('TransfertNavigationComponent', () => {
  let component: TransfertNavigationComponent;
  let fixture: ComponentFixture<TransfertNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
