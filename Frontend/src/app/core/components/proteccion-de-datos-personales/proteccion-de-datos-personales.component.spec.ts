import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionDeDatosPersonalesComponent } from './proteccion-de-datos-personales.component';

describe('ProteccionDeDatosPersonalesComponent', () => {
  let component: ProteccionDeDatosPersonalesComponent;
  let fixture: ComponentFixture<ProteccionDeDatosPersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProteccionDeDatosPersonalesComponent]
    });
    fixture = TestBed.createComponent(ProteccionDeDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
