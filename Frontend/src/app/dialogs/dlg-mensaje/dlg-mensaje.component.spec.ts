import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgMensajeComponent } from './dlg-mensaje.component';

describe('DlgMensajeComponent', () => {
  let component: DlgMensajeComponent;
  let fixture: ComponentFixture<DlgMensajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlgMensajeComponent]
    });
    fixture = TestBed.createComponent(DlgMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
