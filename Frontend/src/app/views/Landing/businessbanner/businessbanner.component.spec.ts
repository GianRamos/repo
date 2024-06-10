import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbannerComponent } from './businessbanner.component';

describe('BusinessbannerComponent', () => {
  let component: BusinessbannerComponent;
  let fixture: ComponentFixture<BusinessbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessbannerComponent]
    });
    fixture = TestBed.createComponent(BusinessbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
