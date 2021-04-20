import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionNavigationComponent } from './proposition-navigation.component';

describe('PropositionNavigationComponent', () => {
  let component: PropositionNavigationComponent;
  let fixture: ComponentFixture<PropositionNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
