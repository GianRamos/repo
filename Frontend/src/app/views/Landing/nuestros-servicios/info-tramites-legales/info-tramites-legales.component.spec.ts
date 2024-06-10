import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTramitesLegalesComponent } from './info-tramites-legales.component';

describe('InfoTramitesLegalesComponent', () => {
  let component: InfoTramitesLegalesComponent;
  let fixture: ComponentFixture<InfoTramitesLegalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTramitesLegalesComponent]
    });
    fixture = TestBed.createComponent(InfoTramitesLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
