import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConstitucionEmpresaComponent } from './info-constitucion-empresa.component';

describe('InfoConstitucionEmpresaComponent', () => {
  let component: InfoConstitucionEmpresaComponent;
  let fixture: ComponentFixture<InfoConstitucionEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoConstitucionEmpresaComponent]
    });
    fixture = TestBed.createComponent(InfoConstitucionEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
