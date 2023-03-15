import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPopUpComponent } from './alert-pop-up.component';

describe('AlertPopUpComponent', () => {
  let component: AlertPopUpComponent;
  let fixture: ComponentFixture<AlertPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
