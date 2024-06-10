import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaRemisionComponent } from './guia-remision.component';

describe('GuiaRemisionComponent', () => {
  let component: GuiaRemisionComponent;
  let fixture: ComponentFixture<GuiaRemisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiaRemisionComponent]
    });
    fixture = TestBed.createComponent(GuiaRemisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
