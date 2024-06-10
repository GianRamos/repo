import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComprobanteComponent } from './editar-comprobante.component';

describe('EditarComprobanteComponent', () => {
  let component: EditarComprobanteComponent;
  let fixture: ComponentFixture<EditarComprobanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarComprobanteComponent]
    });
    fixture = TestBed.createComponent(EditarComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
