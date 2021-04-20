import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPropositionComponent } from './modal-proposition.component';

describe('ModalPropositionComponent', () => {
  let component: ModalPropositionComponent;
  let fixture: ComponentFixture<ModalPropositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPropositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
