import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContableComponent } from './info-contable.component';

describe('InfoContableComponent', () => {
  let component: InfoContableComponent;
  let fixture: ComponentFixture<InfoContableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoContableComponent]
    });
    fixture = TestBed.createComponent(InfoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
