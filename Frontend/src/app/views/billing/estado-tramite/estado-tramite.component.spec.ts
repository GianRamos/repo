import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTramiteComponent } from './estado-tramite.component';

describe('EstadoTramiteComponent', () => {
  let component: EstadoTramiteComponent;
  let fixture: ComponentFixture<EstadoTramiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoTramiteComponent]
    });
    fixture = TestBed.createComponent(EstadoTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
