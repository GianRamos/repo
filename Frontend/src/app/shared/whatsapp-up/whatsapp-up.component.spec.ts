import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappUPComponent } from './whatsapp-up.component';

describe('WhatsappUPComponent', () => {
  let component: WhatsappUPComponent;
  let fixture: ComponentFixture<WhatsappUPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappUPComponent]
    });
    fixture = TestBed.createComponent(WhatsappUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
