import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbuttonComponent } from './topbutton.component';

describe('TopbuttonComponent', () => {
  let component: TopbuttonComponent;
  let fixture: ComponentFixture<TopbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbuttonComponent]
    });
    fixture = TestBed.createComponent(TopbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
