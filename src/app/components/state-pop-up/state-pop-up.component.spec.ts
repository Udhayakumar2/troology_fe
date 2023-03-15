import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePopUpComponent } from './state-pop-up.component';

describe('StatePopUpComponent', () => {
  let component: StatePopUpComponent;
  let fixture: ComponentFixture<StatePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
