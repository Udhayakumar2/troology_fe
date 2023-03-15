import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPortalComponent } from './login-portal.component';

describe('LoginPortalComponent', () => {
  let component: LoginPortalComponent;
  let fixture: ComponentFixture<LoginPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
