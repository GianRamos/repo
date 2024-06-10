import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteComprobantesComponent } from './reporte-comprobantes.component';

describe('ReporteComprobantesComponent', () => {
  let component: ReporteComprobantesComponent;
  let fixture: ComponentFixture<ReporteComprobantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteComprobantesComponent]
    });
    fixture = TestBed.createComponent(ReporteComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
