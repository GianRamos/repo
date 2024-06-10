import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceplansComponent } from './serviceplans.component';

describe('ServiceplansComponent', () => {
  let component: ServiceplansComponent;
  let fixture: ComponentFixture<ServiceplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceplansComponent]
    });
    fixture = TestBed.createComponent(ServiceplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
