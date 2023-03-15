import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPopUpComponent } from './add-edit-pop-up.component';

describe('AddEditPopUpComponent', () => {
  let component: AddEditPopUpComponent;
  let fixture: ComponentFixture<AddEditPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
