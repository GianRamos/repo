import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFacturacionComponent } from './info-facturacion.component';

describe('InfoFacturacionComponent', () => {
  let component: InfoFacturacionComponent;
  let fixture: ComponentFixture<InfoFacturacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFacturacionComponent]
    });
    fixture = TestBed.createComponent(InfoFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
