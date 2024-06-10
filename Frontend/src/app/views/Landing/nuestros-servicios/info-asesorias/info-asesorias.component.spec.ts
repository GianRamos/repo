import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAsesoriasComponent } from './info-asesorias.component';

describe('InfoAsesoriasComponent', () => {
  let component: InfoAsesoriasComponent;
  let fixture: ComponentFixture<InfoAsesoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoAsesoriasComponent]
    });
    fixture = TestBed.createComponent(InfoAsesoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
