import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseConfigurationComponent } from './entreprise-configuration.component';

describe('EntrepriseConfigurationComponent', () => {
  let component: EntrepriseConfigurationComponent;
  let fixture: ComponentFixture<EntrepriseConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
