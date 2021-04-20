import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceConfigComponent } from './appearance-config.component';

describe('AppearanceConfigComponent', () => {
  let component: AppearanceConfigComponent;
  let fixture: ComponentFixture<AppearanceConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppearanceConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearanceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
