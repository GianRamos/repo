import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDeReclamacionesComponent } from './libro-de-reclamaciones.component';

describe('LibroDeReclamacionesComponent', () => {
  let component: LibroDeReclamacionesComponent;
  let fixture: ComponentFixture<LibroDeReclamacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroDeReclamacionesComponent]
    });
    fixture = TestBed.createComponent(LibroDeReclamacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
