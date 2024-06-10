import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksDePagoComponent } from './links-de-pago.component';

describe('LinksDePagoComponent', () => {
  let component: LinksDePagoComponent;
  let fixture: ComponentFixture<LinksDePagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksDePagoComponent]
    });
    fixture = TestBed.createComponent(LinksDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
