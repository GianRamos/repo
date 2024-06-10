import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgEsperaComponent } from './dlg-espera.component';

describe('DlgEsperaComponent', () => {
  let component: DlgEsperaComponent;
  let fixture: ComponentFixture<DlgEsperaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlgEsperaComponent]
    });
    fixture = TestBed.createComponent(DlgEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
