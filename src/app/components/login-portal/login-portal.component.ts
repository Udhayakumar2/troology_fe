import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent {
  loginForm: FormGroup;

  constructor(public router: Router){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^([a-zA-Z0-9_\\-\\.\\+]+)@([a-zA-Z0-9_\\-\\.]+)\\.(\\b(?!web\\b)[a-zA-Z]{2,5})$")]),
      password: new FormControl('',[Validators.required, Validators.minLength(2)])
    });
  }


  onSubmit(){
    if(this.loginForm.valid){
      alert("login success!");
      this.router.navigate(['/table'], { replaceUrl: true });
    } else {
      alert("Enter valid email and password");
      return;
    }
  }
}
